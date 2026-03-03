import { notFound } from "next/navigation";
import { getTemaContent } from "@/lib/curso";
import { getPrevNextTema, getTemaBySlug } from "@/lib/temas";
import { MarkdownContent } from "@/components/MarkdownContent";
import { TemaQuizWrapper } from "@/components/TemaQuizWrapper";
import { TemaNav } from "@/components/TemaNav";
import { TemaBreadcrumb } from "@/components/TemaBreadcrumb";

export async function generateStaticParams() {
  const { getAllTemaSlugs } = await import("@/lib/curso");
  return getAllTemaSlugs().map((slug) => ({ slug }));
}

export default async function TemaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) notFound();

  const content = getTemaContent(slug);
  if (!content) notFound();

  const { prev, next } = getPrevNextTema(slug);

  return (
    <div className="max-w-3xl p-8">
      <TemaBreadcrumb moduloId={tema.moduloId} />
      <header className="mb-6">
        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Módulo {tema.moduloId}: {tema.moduloTitle}
        </div>
      </header>
      <article className="prose prose-zinc dark:prose-invert prose-headings:font-semibold">
        <MarkdownContent content={content.content} />
      </article>
      <div className="mt-10">
        <TemaQuizWrapper slug={slug} />
      </div>
      <TemaNav currentSlug={slug} prev={prev} next={next} />
    </div>
  );
}
