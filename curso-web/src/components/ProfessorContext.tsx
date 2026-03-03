"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";

interface ProfessorContextValue {
  isProfessorMode: boolean;
  withProfessorParam: (path: string) => string;
}

const ProfessorContext = createContext<ProfessorContextValue>({
  isProfessorMode: false,
  withProfessorParam: (path) => path,
});

export function ProfessorProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const isProfessorMode = searchParams.get("perfil") === "professor";

  const value = useMemo(
    () => ({
      isProfessorMode,
      withProfessorParam: (path: string) => {
        if (!isProfessorMode) return path;
        const [base, existing] = path.split("?");
        const params = new URLSearchParams(existing || "");
        params.set("perfil", "professor");
        return `${base}?${params.toString()}`;
      },
    }),
    [isProfessorMode]
  );

  return (
    <ProfessorContext.Provider value={value}>
      {children}
    </ProfessorContext.Provider>
  );
}

export function useProfessorMode() {
  return useContext(ProfessorContext);
}
