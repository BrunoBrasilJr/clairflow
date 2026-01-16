"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [render, setRender] = useState(false); // mantém na tela pra animar fechamento

  useEffect(() => setMounted(true), []);

  // controla lifecycle pra permitir animação de fechar
  useEffect(() => {
    if (open) {
      setRender(true);
      return;
    }
    if (!render) return;
    const t = window.setTimeout(() => setRender(false), 180);
    return () => window.clearTimeout(t);
  }, [open, render]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const node = useMemo(() => {
    if (!mounted) return null;
    return document.body;
  }, [mounted]);

  if (!node || (!open && !render)) return null;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dur = 180;
  const ease = "cubic-bezier(0.4, 0, 0.2, 1)";

  return createPortal(
    <>
      {/* overlay (fade + blur) */}
      <button
        type="button"
        aria-label="Fechar modal (overlay)"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: open ? "rgba(15,23,42,0.30)" : "rgba(15,23,42,0.00)",
          backdropFilter: open ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: open ? "blur(10px)" : "blur(0px)",
          transition: reduce ? "none" : `all ${dur}ms ${ease}`,
        }}
      />

      {/* modal (subidinha + fade) */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          left: "50%",
          top: "84px", // SOBE MUITO. Se quiser mais: 64px.
          zIndex: 9999,
          width: "min(92vw, 680px)",
          borderRadius: "24px",
          border: "1px solid var(--border)",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 28px 90px rgba(15,23,42,0.22)",

          /* animação real */
          transform: open
            ? "translateX(-50%) translateY(0px) scale(1)"
            : "translateX(-50%) translateY(10px) scale(0.985)",
          opacity: open ? 1 : 0,
          filter: open ? "blur(0px)" : "blur(2px)",
          transition: reduce ? "none" : `all ${dur}ms ${ease}`,
          willChange: "transform, opacity, filter",
        }}
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800 }}>{title}</div>
            <div
              className="text-sub"
              style={{ marginTop: "4px", fontSize: "14px" }}
            >
              Perguntas rápidas sobre a demo.
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="lift"
            style={{
              width: "40px",
              height: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <X className="size-5" />
          </button>
        </div>

        {/* conteúdo */}
        <div style={{ padding: "0 20px 22px 20px" }}>{children}</div>
      </div>
    </>,
    node
  );
}
