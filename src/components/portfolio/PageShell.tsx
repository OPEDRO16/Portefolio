import { Link, useRouter } from "@tanstack/react-router";
import { Mail, Github, Linkedin, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { LiveClock } from "./LiveClock";
import { CursorDot } from "./CursorDot";

interface PageShellProps {
  children: ReactNode;
  showBack?: boolean;
  backTo?: string;
}

export function PageShell({ children, showBack = false, backTo = "/" }: PageShellProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.navigate({ to: backTo });
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-6 md:px-8 md:py-10">
      <CursorDot />
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="surface-card flex items-center justify-between px-5 py-4 md:px-6">
          <div className="flex items-baseline gap-4">
            <Link to="/" className="flex items-baseline gap-2 group">
              <span className="display text-lg md:text-xl group-hover:opacity-70 transition-opacity">
                PM
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                · portfolio
              </span>
            </Link>
            <span className="hidden md:inline text-muted-foreground/40">/</span>
            <span className="hidden md:inline"><LiveClock /></span>
          </div>
          <nav className="flex items-center gap-1 md:gap-2">
            {showBack && (
              <button
                type="button"
                onClick={handleGoBack}
                className="mono text-xs uppercase tracking-widest px-3 py-2 hover:underline underline-offset-4 inline-flex items-center gap-1"
                aria-label="Go back"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Go back
              </button>
            )}
            <a
              href="https://github.com/OPEDRO16"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 hover:opacity-60 transition-opacity"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-marques-40a816362"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:opacity-60 transition-opacity"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </nav>
        </header>

        {children}

        <footer className="surface-card flex flex-col md:flex-row items-start md:items-center justify-between gap-2 px-5 py-4 md:px-6 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} — Pedro Marques</span>
          <span>Archivo Black · Inter · JetBrains Mono</span>
        </footer>
      </div>
    </div>
  );
}