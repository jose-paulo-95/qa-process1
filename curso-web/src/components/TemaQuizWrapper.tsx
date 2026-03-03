"use client";

import { useCallback } from "react";
import { Quiz } from "./Quiz";
import { TemaConcluidoButton } from "./TemaConcluidoButton";
import { useProgress } from "./ProgressContext";
import { getQuizByTema } from "@/lib/quiz-data";

interface TemaQuizWrapperProps {
  slug: string;
}

export function TemaQuizWrapper({ slug }: TemaQuizWrapperProps) {
  const { markTemaCompleted, isTemaCompleted } = useProgress();
  const questions = getQuizByTema(slug);

  const handleAllCorrect = useCallback(() => {
    markTemaCompleted(slug);
  }, [slug, markTemaCompleted]);

  if (questions.length > 0) {
    return <Quiz questions={questions} onAllCorrect={handleAllCorrect} />;
  }

  return <TemaConcluidoButton slug={slug} />;
}
