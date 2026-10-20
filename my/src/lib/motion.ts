"use client";

import { useSyncExternalStore } from "react";

const POINTER_FINE_QUERY = "(pointer: fine)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(POINTER_FINE_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(POINTER_FINE_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** True only for mouse/trackpad input — gates hover-only motion (magnetic buttons, tilt) off touchscreens. */
export function usePointerFine(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Shared easing: confident, slightly overshooting deceleration — used across every entrance animation. */
export const easeOut = [0.16, 1, 0.3, 1] as const;
