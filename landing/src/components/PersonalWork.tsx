import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { TELEGRAM_HANDLE, TELEGRAM_URL } from "../data/constants";

export default function PersonalWork() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-xl rounded-[2rem] border border-plum/15 bg-lavender/40 px-8 py-10 text-center sm:px-12 sm:py-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70">
            Для личной работы
          </span>
          <p className="mt-4 text-lg leading-relaxed text-ink/80 sm:text-xl">
            Чтобы выстроить всю систему вашей работы онлайн, пишите {TELEGRAM_HANDLE}.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-plum/25 px-6 py-3 text-sm font-semibold text-plum transition-colors hover:border-plum hover:bg-white"
          >
            Написать в Telegram
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
