import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LuxuryCard, SectionTitle } from "@/components/ui";
import { menuCategories, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore soups, Indian mains, breads, rice, beer towers and drinks at The Olive Court Jodhpur.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-night px-4 pt-32">
        <section className="container-shell py-16 lg:py-24">
          <SectionTitle
            eyebrow="Full Menu"
            title="Elegant plates, comforting classics and rooftop pours."
            text={`Browse selected items from ${site.name}'s multi-cuisine menu. Prices are indicative and may change at the restaurant.`}
          />
          <div className="sticky top-20 z-20 -mx-4 mb-12 flex gap-3 overflow-x-auto border-y border-white/10 bg-night/90 px-4 py-4 backdrop-blur-xl">
            {menuCategories.map((category) => (
              <a key={category.name} className="whitespace-nowrap rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-gold hover:text-gold" href={`#${category.name.replaceAll(" ", "-")}`}>
                {category.name}
              </a>
            ))}
          </div>
          <div className="grid gap-12">
            {menuCategories.map((category) => (
              <section key={category.name} id={category.name.replaceAll(" ", "-")} className="scroll-mt-32">
                <h2 className="mb-6 font-serif text-4xl text-gold">{category.name}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.items.map(([name, description, price]) => (
                    <LuxuryCard key={name} className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-serif text-2xl">{name}</h3>
                        <p className="mt-2 leading-7 text-muted">{description}</p>
                      </div>
                      <span className="whitespace-nowrap font-semibold text-gold">{price}</span>
                    </LuxuryCard>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
