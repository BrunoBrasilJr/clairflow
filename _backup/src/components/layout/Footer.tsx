"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Modal from "@/components/ui/Modal";
import FaqContent from "@/components/sections/FaqContent";

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(false);

  return (
    <footer className="mt-10 border-t border-var(--border) bg-white/60 backdrop-blur">
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
              className="rounded-2xl border border-var(--border) bg-white/70 px-4 py-2 text-sm font-semibold lift"
            >
              FAQ
            </button>

            <a
              href="#cta"
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-white lift"
              style={{ background: "var(--grad-cta)" }}
            >
              Solicitar demo
            </a>
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
