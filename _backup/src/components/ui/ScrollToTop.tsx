"use client";

import { useEffect } from "react";

export default function ScrollRestorationTop() {
  useEffect(() => {
    // Desliga restauração automática do browser (quando existe)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Garante que sempre começa no topo ao carregar/recarregar
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
