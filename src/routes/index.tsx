import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { IntroSplash } from "@/components/IntroSplash";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL, PHONE, EMAIL, MAPS_URL } from "@/lib/site-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio Notarial & Jurídico ARAÚJO — Escribanía en La Barra, Punta del Este" },
      {
        name: "description",
        content:
          "Estudio Notarial & Jurídico ARAÚJO en La Barra, Punta del Este. Compraventas, sucesiones, poderes, hipotecas y certificaciones con atención personalizada en Maldonado y para extranjeros.",
      },
      {
        name: "keywords",
        content:
          "escribanía, escribano público, trámites notariales, compraventas, sucesiones, poderes, hipotecas, certificaciones, contratos, protocolizaciones",
      },
      { property: "og:title", content: "Estudio Notarial & Jurídico ARAÚJO — Escribanía en La Barra" },
      {
        property: "og:description",
        content:
          "Asesoramiento claro, rapidez en la gestión y acompañamiento profesional en cada etapa del proceso notarial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Estudio Notarial & Jurídico ARAÚJO — Escribanía en La Barra" },
      {
        name: "twitter:description",
        content:
          "Asesoramiento claro, rapidez en la gestión y acompañamiento profesional en cada etapa del proceso notarial.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <IntroSplash />
      <style>{`
        html { scroll-behavior: smooth; }
        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }
        [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1); }
        [data-reveal="left"] { transform: translateX(-32px); }
        [data-reveal="right"] { transform: translateX(32px); }
        [data-reveal="zoom"] { transform: scale(.96); }
        [data-reveal].is-visible { opacity: 1; transform: none; }
        .hairline { background: linear-gradient(90deg, transparent, oklch(0.72 0.11 82 / .55), transparent); }
        @keyframes floatPulse { 0%,100% { box-shadow: 0 10px 30px -8px oklch(0.55 0.14 155 / .5); } 50% { box-shadow: 0 14px 40px -6px oklch(0.55 0.14 155 / .8); } }
        .wa-float { animation: floatPulse 2.6s ease-in-out infinite; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />

      {/* Opiniones reales */}
      <Reviews />

      <Faq />
      <Contact />
      <Footer />

      {/* WhatsApp flotante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="wa-float fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.16_150)] text-white transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Estudio Notarial & Jurídico ARAÚJO",
            description:
              "Estudio Notarial & Jurídico ARAÚJO en La Barra, Punta del Este. Compraventas, sucesiones, poderes, hipotecas, certificaciones y asesoramiento notarial en Maldonado y para extranjeros.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cayetano Silva y Av. Juana de América, El Tesoro, La Barra",
              addressLocality: "Punta del Este",
              addressRegion: "Maldonado",
              postalCode: "20000",
              addressCountry: "UY",
            },
            hasMap: MAPS_URL,
            telephone: PHONE,
            email: EMAIL,
            areaServed: ["Maldonado", "La Barra", "Punta del Este"],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:30",
              closes: "18:30",
            },
          }),
        }}
      />
    </div>
  );
}
