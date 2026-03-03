"use client";

import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { TEMAS } from "@/lib/temas";
import { useProfessorMode } from "./ProfessorContext";
import {
  loadProgress,
  saveProgress,
  getProgressPercent,
  type ProgressState,
} from "@/lib/progress";

interface ProgressContextValue {
  completedTemas: Set<string>;
  completedProvas: Set<number>;
  lastVisitedTema: string | null;
  progressPercent: number;
  markTemaCompleted: (slug: string) => void;
  markProvaCompleted: (moduloId: number) => void;
  isTemaCompleted: (slug: string) => boolean;
  isProvaCompleted: (moduloId: number) => boolean;
  isTemaUnlocked: (slug: string) => boolean;
  isProvaUnlocked: (moduloId: number) => boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const INITIAL_STATE: ProgressState = {
  completedTemas: [],
  completedProvas: [],
  lastVisitedTema: null,
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { isProfessorMode } = useProfessorMode();
  const [state, setState] = useState<ProgressState>(INITIAL_STATE);

  useEffect(() => {
    setState(loadProgress());
  }, []);

  const markTemaCompleted = useCallback((slug: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        completedTemas: prev.completedTemas.includes(slug)
          ? prev.completedTemas
          : [...prev.completedTemas, slug],
        lastVisitedTema: slug,
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const markProvaCompleted = useCallback((moduloId: number) => {
    setState((prev) => {
      const next = {
        ...prev,
        completedProvas: prev.completedProvas.includes(moduloId)
          ? prev.completedProvas
          : [...prev.completedProvas, moduloId],
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const isTemaCompleted = useCallback(
    (slug: string) => state.completedTemas.includes(slug),
    [state.completedTemas]
  );

  const isProvaCompleted = useCallback(
    (moduloId: number) => state.completedProvas.includes(moduloId),
    [state.completedProvas]
  );

  const isTemaUnlocked = useCallback(
    (slug: string) => {
      if (isProfessorMode) return true;
      const index = TEMAS.findIndex((t) => t.slug === slug);
      if (index <= 0) return true;
      const prevTema = TEMAS[index - 1];
      return state.completedTemas.includes(prevTema.slug);
    },
    [state.completedTemas, isProfessorMode]
  );

  const isProvaUnlocked = useCallback(
    (moduloId: number) => {
      if (isProfessorMode) return true;
      const temasDoModulo = TEMAS.filter((t) => t.moduloId === moduloId);
      return temasDoModulo.every((t) => state.completedTemas.includes(t.slug));
    },
    [state.completedTemas, isProfessorMode]
  );

  const totalItems = TEMAS.length + 6;
  const completedItems =
    state.completedTemas.length + state.completedProvas.length;
  const progressPercent = getProgressPercent(
    state.completedTemas.length,
    state.completedProvas.length,
    TEMAS.length,
    6
  );

  return (
    <ProgressContext.Provider
      value={{
        completedTemas: new Set(state.completedTemas),
        completedProvas: new Set(state.completedProvas),
        lastVisitedTema: state.lastVisitedTema,
        progressPercent,
        markTemaCompleted,
        markProvaCompleted,
        isTemaCompleted,
        isProvaCompleted,
        isTemaUnlocked,
        isProvaUnlocked,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
