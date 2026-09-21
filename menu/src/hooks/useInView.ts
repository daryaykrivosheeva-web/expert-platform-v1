import { useEffect, useState } from "react";

export function useElementInView(selector: string) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "0px",
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [selector]);

  return inView;
}
