import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import featherLogo from "@/assets/feather-logo.png";
import { WHATSAPP_URL } from "@/lib/site-info";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-[0_1px_20px_-10px_oklch(0.24_0.05_258_/_0.25)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <span
            className="grid h-14 w-14 place-items-center rounded-full"
            style={{ background: "color-mix(in oklab, var(--gold) 18%, white)" }}
          >
            <img src={featherLogo} alt="" className="h-9 w-9 object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg tracking-wide text-ink">
              Estudio ARAÚJO
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Notarial & Jurídico
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {[
            ["Inicio", "#inicio"],
            ["Nosotros", "#nosotros"],
            ["Servicios", "#servicios"],
            ["Proceso", "#proceso"],
            ["Preguntas", "#faq"],
            ["Contacto", "#contacto"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" style={{ color: "var(--gold)" }} />
          Escribinos por WhatsApp
        </a>

        <button
          aria-label="Menú"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-ink lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col p-6">
            {[
              ["Inicio", "#inicio"],
              ["Nosotros", "#nosotros"],
              ["Servicios", "#servicios"],
              ["Proceso", "#proceso"],
              ["Preguntas", "#faq"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-navy-foreground"
            >
              <MessageCircle className="h-4 w-4" style={{ color: "var(--gold)" }} />
              Escribinos por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
