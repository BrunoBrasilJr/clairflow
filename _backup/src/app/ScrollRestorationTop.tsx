"use client";

import { useEffect } from "react";

export default function ScrollRestorationTop() {
  useEffect(() => {
    // impede o browser de “lembrar” o scroll ao recarregar
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // garante topo no load / F5
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
