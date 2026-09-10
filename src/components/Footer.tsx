import { MapPin, Phone, Mail, Clock } from "lucide-react";

import featherLogo from "@/assets/feather-logo.png";
import { PHONE, EMAIL, ADDRESS, MAPS_QUERY, MAPS_URL } from "@/lib/site-info";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white">
                <img src={featherLogo} alt="" className="h-9 w-9 object-contain" />
              </span>
              <div>
                <div className="font-serif text-lg text-white">Estudio ARAÚJO</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                  Notarial & Jurídico
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Servicio notarial profesional, cercano y eficiente. Trámites con seguridad jurídica
              y atención personalizada.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">Enlaces</div>
            <ul className="space-y-2 text-sm">
              {[
                ["Inicio", "#inicio"],
                ["Nosotros", "#nosotros"],
                ["Servicios", "#servicios"],
                ["Preguntas", "#faq"],
                ["Contacto", "#contacto"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none" style={{ color: "var(--gold)" }} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: "var(--gold)" }} />
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: "var(--gold)" }} />
                Lun a Vie · 09:30 – 18:30
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">
              Ubicación
            </div>
            <div className="overflow-hidden rounded-sm border border-white/10">
              <iframe
                title="Mapa footer"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                width="100%"
                height="140"
                loading="lazy"
                className="block w-full grayscale opacity-90"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Estudio Notarial & Jurídico ARAÚJO. Todos los derechos reservados.</div>
          <div>Diseño y desarrollo con dedicación.</div>
        </div>
      </div>
    </footer>
  );
}
