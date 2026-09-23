// Генератор карточек для Pinterest: /api/pin?title=…&label=…&note=…&p1=Строка|Пояснение … &p5=…&theme=dasha|nastya
// Возвращает PNG 1000×1500. Картинку забирает Pinterest по ссылке, которую подставляет сценарий Make.
import { readFileSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const font = (file) => readFileSync(new URL(`./_fonts/${file}`, import.meta.url));

let fontsCache;
function loadFonts() {
  if (fontsCache) return fontsCache;
  fontsCache = [];
  for (const [subset, suffix] of [["latin", "L"], ["cyrillic", "C"]]) {
    fontsCache.push({ name: "Playfair" + suffix, data: font(`playfair-display-${subset}-700-normal.woff`), weight: 700 });
    fontsCache.push({ name: "Inter" + suffix, data: font(`inter-${subset}-400-normal.woff`), weight: 400 });
    fontsCache.push({ name: "Inter" + suffix, data: font(`inter-${subset}-600-normal.woff`), weight: 600 });
    fontsCache.push({ name: "Caveat" + suffix, data: font(`caveat-${subset}-600-normal.woff`), weight: 600 });
  }
  return fontsCache;
}

const SERIF = "PlayfairL, PlayfairC";
const SANS = "InterL, InterC";
const HAND = "CaveatL, CaveatC";

const COLORS = { terra: "#C9694A", terraDark: "#A94F34", ink: "#2F4F41", sage: "#4F7A66", white: "#FFFFFF" };
const THEMES = {
  dasha: { bg: "#FBE5D6", title: COLORS.terraDark },
  nastya: { bg: "#F7F2E9", title: COLORS.ink },
};

function h(type, style, children) {
  return { type, props: { style: { display: "flex", ...style }, children } };
}
const text = (value, style) => h("div", style, value);

// Обрезает слишком длинный текст по границе слова.
function clean(value, max) {
  const str = String(value ?? "").replace(/\s+/g, " ").trim();
  if (str.length <= max) return str;
  const cut = str.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.:;—-]+$/, "");
}

function card({ label, title, note, points, theme }) {
  // Если ChatGPT написал длиннее нормы — уменьшаем шрифты, чтобы всё поместилось.
  const dense = title.length > 50 || points.some(([head, sub]) => head.length > 28 || sub.length > 42);
  const titleSize = dense ? 62 : title.length > 28 ? 76 : 88;
  const [headSize, subSize, gap] = dense ? [30, 25, 14] : [36, 30, 22];
  return h("div", { width: 1000, height: 1500, background: theme.bg, padding: "80px 80px 70px", flexDirection: "column" }, [
    label
      ? h("div", { alignSelf: "flex-start", background: COLORS.white, color: COLORS.sage, fontFamily: SANS, fontWeight: 600,
          fontSize: 28, letterSpacing: 2, textTransform: "uppercase", padding: "12px 26px", borderRadius: 999 }, label)
      : null,
    text(title, { marginTop: 36, fontFamily: SERIF, fontWeight: 700, fontSize: titleSize, lineHeight: 1.08, color: theme.title }),
    h("div", { marginTop: 50, flexDirection: "column" }, points.map(([head, sub], i) =>
      h("div", { alignItems: "flex-start", marginBottom: gap }, [
        h("div", { width: 76, height: 76, borderRadius: 999, background: COLORS.terra, color: COLORS.white, alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontWeight: 700, fontSize: 42, marginRight: 30, flexShrink: 0 }, String(i + 1)),
        h("div", { flexDirection: "column", background: COLORS.white, borderRadius: 28, padding: "16px 30px", width: 734 }, [
          text(head, { fontFamily: SANS, fontWeight: 600, fontSize: headSize, color: COLORS.ink }),
          sub ? text(sub, { marginTop: 6, fontFamily: SANS, fontWeight: 400, fontSize: subSize, lineHeight: 1.3, color: COLORS.sage }) : null,
        ].filter(Boolean)),
      ]))),
    h("div", { marginTop: "auto", flexDirection: "column" }, [
      note ? text(note, { fontFamily: HAND, fontWeight: 600, fontSize: 52, color: COLORS.sage, marginBottom: 22 }) : null,
      h("div", { alignItems: "center", justifyContent: "space-between", borderTop: `3px solid ${COLORS.terra}`, paddingTop: 26 }, [
        text("Меню на 4 недели", { fontFamily: SERIF, fontWeight: 700, fontSize: 34, color: COLORS.ink }),
        text("ссылка в профиле", { fontFamily: SANS, fontWeight: 600, fontSize: 30, color: COLORS.terraDark }),
      ]),
    ].filter(Boolean)),
  ].filter(Boolean));
}

export async function renderCard(params) {
  const points = [1, 2, 3, 4, 5]
    .map((n) => clean(params.get(`p${n}`), 110).split("|"))
    .filter(([head]) => head)
    .map(([head, sub]) => [clean(head, 34), clean(sub, 50)]);
  const element = card({
    label: clean(params.get("label"), 20),
    title: clean(params.get("title"), 60) || "Меню на 4 недели",
    note: clean(params.get("note"), 34),
    points,
    theme: THEMES[params.get("theme")] ?? THEMES.dasha,
  });
  const svg = await satori(element, { width: 1000, height: 1500, fonts: loadFonts() });
  return new Resvg(svg, { fitTo: { mode: "width", value: 1000 } }).render().asPng();
}

export async function GET(request) {
  try {
    const png = await renderCard(new URL(request.url).searchParams);
    return new Response(png, {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
    });
  } catch (error) {
    return new Response(`Card error: ${error.message}`, { status: 500 });
  }
}
