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
      className="fixed inset-x-0 top-0 z-40 backdrop-blur"
      style={{
        height: 72,
        background: "var(--surface)",
      }}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <div className="text-base font-extrabold tracking-tight sm:text-lg">
          ClairFlow
        </div>

        {/* Navegação */}
        <nav className="hidden items-center gap-6 sm:flex">
          <button
            onClick={() => scrollTo("produto")}
            className="nav-link text-sm font-medium"
          >
            Produto
          </button>

          <button
            onClick={() => scrollTo("recursos")}
            className="nav-link text-sm font-medium"
          >
            Recursos
          </button>

          <button
            onClick={() => scrollTo("casos")}
            className="nav-link text-sm font-medium"
          >
            Casos de uso
          </button>

          <button
            onClick={() => scrollTo("planos")}
            className="nav-link text-sm font-medium"
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
