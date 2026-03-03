"use client";

const STORAGE_KEY = "curso-qa-progress";

export interface ProgressState {
  completedTemas: string[];
  completedProvas: number[];
  lastVisitedTema: string | null;
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") {
    return { completedTemas: [], completedProvas: [], lastVisitedTema: null };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedTemas: [], completedProvas: [], lastVisitedTema: null };
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      ...parsed,
      completedProvas: parsed.completedProvas ?? [],
    };
  } catch {
    return { completedTemas: [], completedProvas: [], lastVisitedTema: null };
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function getProgressPercent(
  completedTemas: number,
  completedProvas: number,
  totalTemas: number,
  totalProvas: number
): number {
  const total = totalTemas + totalProvas;
  if (total === 0) return 0;
  const pct = ((completedTemas + completedProvas) / total) * 100;
  return Math.min(100, Math.round(pct));
}
