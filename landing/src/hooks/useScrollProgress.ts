import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? Math.min(1, scrollTop / height) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function usePastScrollThreshold(thresholdRatio: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      setPast(height > 0 ? scrollTop / height > thresholdRatio : false);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholdRatio]);

  return past;
}
