"use client";

import Container from "@/components/layout/Container";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-var(--border) bg-white/70 backdrop-blur"
      style={{ height: 72 }}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <div className="text-sm font-extrabold tracking-tight">ClairFlow</div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <button
            onClick={() => scrollTo("produto")}
            className="text-sm font-medium text-sub transition hover:text-var(--text)"
          >
            Produto
          </button>

          <button
            onClick={() => scrollTo("recursos")}
            className="text-sm font-medium text-sub transition hover:text-var(--text)"
          >
            Recursos
          </button>

          <button
            onClick={() => scrollTo("casos")}
            className="text-sm font-medium text-sub transition hover:text-var(--text)"
          >
            Casos de uso
          </button>

          <button
            onClick={() => scrollTo("planos")}
            className="text-sm font-medium text-sub transition hover:text-var(--text)"
          >
            Planos
          </button>
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo("cta")}
          className="rounded-2xl px-4 py-2 text-sm font-semibold text-white lift"
          style={{ background: "var(--grad-cta)" }}
        >
          Solicitar demo
        </button>
      </Container>
    </header>
  );
}
