import Reveal from "./ui/Reveal";
import type { Tool } from "../data/tools";

const panelStyles: Record<string, string> = {
  "01": "bg-plum text-white",
  "02": "bg-sand text-ink",
  "04": "bg-lavender text-ink",
  "05": "bg-plum text-white",
};

function NumberPanel({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const styles = panelStyles[tool.number] ?? "bg-plum text-white";
  return (
    <div
      className={`flex ${compact ? "aspect-auto py-10" : "aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"} flex-col justify-between rounded-[2rem] ${styles} p-8 sm:p-10`}
    >
      <span className="font-serif text-sm font-medium tracking-[0.3em] opacity-70">
        {tool.number} / 05
      </span>
      <div>
        <span className="block text-5xl sm:text-6xl" aria-hidden="true">
          {tool.icon}
        </span>
        <h3 className="mt-6 font-serif text-2xl leading-tight sm:text-3xl">{tool.title}</h3>
      </div>
    </div>
  );
}

function Paragraphs({ tool }: { tool: Tool }) {
  return (
    <div className="space-y-4">
      {tool.paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-[16px] sm:text-lg leading-relaxed ${i === 0 ? "text-ink" : "text-ink/75"}`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function ExamplePills({ tool }: { tool: Tool }) {
  if (!tool.examples) return null;
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tool.examples.map((ex) => (
        <div
          key={ex.audience}
          className="rounded-full border border-plum/15 bg-lavender/50 px-4 py-2.5 text-sm leading-snug text-ink/80"
        >
          <span className="font-semibold text-plum">{ex.audience}</span>
          <span className="mx-1.5 text-ink/40">→</span>
          {ex.material}
        </div>
      ))}
    </div>
  );
}

export default function ToolSection({ tool }: { tool: Tool }) {
  if (tool.layout === "quote") {
    const [first, ...rest] = tool.paragraphs;
    return (
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm font-medium tracking-[0.3em] text-plum/70">
              {tool.number} / 05
            </span>
            <span className="text-3xl" aria-hidden="true">
              {tool.icon}
            </span>
          </div>
          <h3 className="mt-4 text-2xl text-ink sm:text-[28px]">{tool.title}</h3>
          <p className="mt-6 font-quote text-2xl italic leading-snug text-plum sm:text-[28px]">
            {first}
          </p>
          <div className="mt-6 space-y-4">
            {rest.map((p, i) => (
              <p key={i} className="text-[16px] sm:text-lg leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    );
  }

  if (tool.layout === "split") {
    return (
      <Reveal>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <NumberPanel tool={tool} compact />
          <div className="flex flex-col justify-center">
            <Paragraphs tool={tool} />
          </div>
        </div>
      </Reveal>
    );
  }

  const reverse = tool.layout === "reverse";

  return (
    <Reveal>
      <div
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <NumberPanel tool={tool} />
        <div>
          <Paragraphs tool={tool} />
          <ExamplePills tool={tool} />
        </div>
      </div>
    </Reveal>
  );
}
