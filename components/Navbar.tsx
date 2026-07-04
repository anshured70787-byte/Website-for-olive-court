"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "bg-black/20"}`}>
      <nav className="container-shell flex items-center justify-between py-4">
        <a href="/#home" className="font-serif text-2xl font-bold tracking-[0.22em]">
          OLIVE<span className="text-gold">.</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:text-gold">
              {item.label}
            </a>
          ))}
          <a href={`tel:${site.phones[0].replaceAll(" ", "")}`} className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-gold">
            Reserve Table
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation menu">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 min-h-screen bg-night p-6 lg:hidden">
          <button className="ml-auto block" onClick={() => setOpen(false)} aria-label="Close navigation menu">
            <X />
          </button>
          <div className="mt-16 grid gap-8 text-center font-serif text-4xl">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
