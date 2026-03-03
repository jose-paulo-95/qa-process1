import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TEMAS, getTemaBySlug } from "./temas";

const CONTENT_DIR = path.join(process.cwd(), "content", "curso-pleno");

export function getTemaContent(slug: string): { content: string; data: Record<string, unknown> } | null {
  const tema = getTemaBySlug(slug);
  if (!tema) return null;
  const moduloDir = path.join(CONTENT_DIR, `modulo-${String(tema.moduloId).padStart(2, "0")}`);
  const filePath = path.join(moduloDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, data };
}

export function getAllTemaSlugs(): string[] {
  return TEMAS.map((t) => t.slug);
}
