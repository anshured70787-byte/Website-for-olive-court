import { Instagram, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black px-4 py-16">
      <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-serif text-3xl font-bold">The Olive Court</h2>
          <p className="mt-4 max-w-sm leading-7 text-muted">{site.description}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-muted">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Contact</h3>
          <p className="mt-4 flex gap-2 text-muted"><Phone size={18} /> {site.phones.join(" | ")}</p>
          <p className="mt-3 flex gap-2 text-muted"><Instagram size={18} /> {site.instagramHandle}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Visit</h3>
          <p className="mt-4 flex gap-2 leading-7 text-muted"><MapPin className="mt-1 shrink-0" size={18} /> {site.addresses[0]}</p>
        </div>
      </div>
      <div className="container-shell mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
        © The Olive Court, Jodhpur. All rights reserved.
      </div>
    </footer>
  );
}
