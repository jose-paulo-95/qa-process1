import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { ProgressProvider } from "@/components/ProgressContext";
import { ProfessorProvider } from "@/components/ProfessorContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curso QA Junior para Pleno",
  description: "Curso completo com explicações, exercícios e provas para evolução de QA Junior para Pleno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ProfessorProvider>
            <ProgressProvider>
              <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <Sidebar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </ProgressProvider>
          </ProfessorProvider>
        </Suspense>
      </body>
    </html>
  );
}
