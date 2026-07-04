import Image from "next/image";
import type { ReactNode } from "react";
import { FadeUp } from "./Motion";

export function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return (
    <FadeUp className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="gold-kicker text-xs font-bold">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-muted">{text}</p> : null}
    </FadeUp>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "dark" }) {
  const styles = {
    primary: "bg-gold text-black shadow-gold",
    outline: "border border-gold text-gold",
    dark: "bg-black text-white",
  }[variant];

  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold transition hover:-translate-y-1 ${styles}`}>
      {children}
    </a>
  );
}

export function LuxuryCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <FadeUp className={`glass-card rounded-[1.5rem] p-6 ${className}`}>{children}</FadeUp>;
}

export function ImagePanel({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] bg-charcoal ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
    </div>
  );
}
