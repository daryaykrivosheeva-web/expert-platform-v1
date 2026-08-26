import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gold motion-reduce:transition-none"
        style={{ width: `${progress * 100}%`, transition: "width 120ms linear" }}
      />
    </div>
  );
}
