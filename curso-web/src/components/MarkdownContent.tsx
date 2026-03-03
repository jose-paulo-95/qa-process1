import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mb-3 mt-8 border-b border-zinc-200 pb-2 text-xl font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-200">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mb-2 mt-6 text-lg font-medium text-zinc-700 dark:text-zinc-300">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-zinc-600 dark:text-zinc-400">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1 text-zinc-600 dark:text-zinc-400">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-7">{children}</li>,
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
      <table className="w-full min-w-[320px] border-collapse text-left">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="bg-zinc-100 dark:bg-zinc-800">{children}</thead>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => (
    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">{children}</tbody>
  ),
  tr: ({ children }: { children?: React.ReactNode }) => (
    <tr className="border-b border-zinc-200 transition-colors last:border-b-0 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800/50">
      {children}
    </tr>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </td>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-700">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
      {children}
    </pre>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="mb-4 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-600 dark:text-zinc-400">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-6 border-zinc-200 dark:border-zinc-700" />,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = href?.startsWith("http");
    const isInternalModulo = href?.endsWith(".md") && !href.includes("..") && href.startsWith("modulo-");
    const internalSlug = isInternalModulo && href ? href.replace(".md", "") : null;
    const finalHref = internalSlug ? `/modulo/${internalSlug}` : href || "#";
    return (
      <a
        href={finalHref}
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
};

export function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{content}</ReactMarkdown>;
}
