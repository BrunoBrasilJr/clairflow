"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false); // “deveria aparecer?”
  const [mounted, setMounted] = useState(false); // tá no DOM?
  const [active, setActive] = useState(false); // estado animado (entra/sai)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dur = 180;
  const ease = "cubic-bezier(0.4, 0, 0.2, 1)";

  // Entrada: monta invisível e só depois ativa (pra animar de verdade)
  useEffect(() => {
    if (!show) return;

    setMounted(true);
    setActive(false);

    if (reduce) {
      setActive(true);
      return;
    }

    const raf = window.requestAnimationFrame(() => setActive(true));
    return () => window.cancelAnimationFrame(raf);
  }, [show, reduce]);

  // Saída: desativa (anima) e depois desmonta
  useEffect(() => {
    if (show) return;
    if (!mounted) return;

    setActive(false);

    if (reduce) {
      setMounted(false);
      return;
    }

    const t = window.setTimeout(() => setMounted(false), dur);
    return () => window.clearTimeout(t);
  }, [show, mounted, reduce]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50"
      style={{
        width: 52,
        height: 52,

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 16,
        border: "2px solid rgba(11,18,32,0.32)", // traçado mais forte
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 18px 45px rgba(15,23,42,0.14)",

        opacity: active ? 1 : 0,
        transform: active ? "translateY(0px)" : "translateY(10px)",
        transition: reduce ? "none" : `all ${dur}ms ${ease}`,
        willChange: "transform, opacity",

        cursor: "pointer",
      }}
    >
      <ArrowUp
        size={18}
        style={{
          display: "block",
          color: "rgba(11,18,32,0.90)",
        }}
      />
    </button>
  );
}
