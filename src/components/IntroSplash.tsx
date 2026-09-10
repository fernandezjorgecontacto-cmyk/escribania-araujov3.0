import { useEffect, useState } from "react";

import featherLogo from "@/assets/feather-logo.png";

export function IntroSplash() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 933);
    const t2 = setTimeout(() => setPhase("done"), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] grid place-items-center transition-opacity duration-[600ms] ease-out"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, color-mix(in oklab, var(--gold) 12%, white), var(--cream))",
        opacity: phase === "out" ? 0 : 1,
        pointerEvents: phase === "out" ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={featherLogo}
          alt=""
          className="object-contain"
          style={{
            width: phase === "out" ? "72px" : "150px",
            height: phase === "out" ? "72px" : "150px",
            opacity: phase === "out" ? 0 : 1,
            transform: phase === "out" ? "translateY(-24px)" : "translateY(0)",
            transition: "all 600ms cubic-bezier(.2,.7,.2,1)",
            animation: "introFeather 0.933s cubic-bezier(.2,.7,.2,1) both",
          }}
        />
        <span
          className="mt-6 font-serif text-lg tracking-[0.2em] text-ink"
          style={{
            opacity: phase === "out" ? 0 : 1,
            transition: "opacity 400ms ease-out",
            animation: "introFade 1.067s ease-out both",
          }}
        >
          ESTUDIO ARAÚJO
        </span>
        <span
          className="mt-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
          style={{
            opacity: phase === "out" ? 0 : 1,
            transition: "opacity 400ms ease-out",
            animation: "introFade 1.333s ease-out both",
          }}
        >
          Notarial &amp; Jurídico
        </span>
      </div>
      <style>{`
        @keyframes introFeather { 0% { opacity: 0; transform: translateY(18px) scale(.9) rotate(-6deg); } 100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); } }
        @keyframes introFade { 0%, 35% { opacity: 0; } 100% { opacity: 1; } }
      `}</style>
    </div>
  );
}
