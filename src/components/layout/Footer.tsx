"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Modal from "@/components/ui/Modal";
import FaqContent from "@/components/sections/FaqContent";

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(false);

  return (
    <footer
      className="mt-12 backdrop-blur"
      style={{ background: "var(--surface)" }}
    >
      <div className="h-px bg-black/5" />

      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-extrabold">ClairFlow</div>
            <p className="mt-2 max-w-xl text-sm text-sub">
              Demo front-end (empresa fictícia) focada em UI/UX premium,
              componentes consistentes e responsividade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpenFaq(true)}
              className="rounded-2xl border bg-white/80 px-4 py-2 text-sm font-semibold lift"
              style={{ borderColor: "rgba(15,23,42,0.12)" }}
            >
              FAQ
            </button>

            <button
              type="button"
              onClick={() =>
                document.getElementById("cta")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-white lift"
              style={{ background: "var(--grad-cta)" }}
            >
              Solicitar demo
            </button>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} ClairFlow. Projeto demonstrativo.
        </div>
      </Container>

      <Modal
        open={openFaq}
        onClose={() => setOpenFaq(false)}
        title="FAQ — Perguntas rápidas"
      >
        <FaqContent />
      </Modal>
    </footer>
  );
}
