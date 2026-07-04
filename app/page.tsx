import Image from "next/image";
import { ChefHat, Clock, Coffee, Flame, HeartHandshake, Instagram, MapPin, Music, Phone, Sparkles, Star, Utensils, Wine } from "lucide-react";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { ButtonLink, ImagePanel, LuxuryCard, SectionTitle } from "@/components/ui";
import { cuisines, experiences, gallery, highlights, reviews, signatureDishes, site } from "@/lib/data";

const icons = [Flame, Music, Wine, Utensils];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="home" className="bg-night">
        <section className="luxury-surface min-h-screen px-4 pt-32">
          <div className="container-shell grid items-center gap-14 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-24">
            <FadeUp>
              <p className="gold-kicker text-xs font-bold">Jodhpur · Rooftop · Fine Dining</p>
              <h1 className="mt-7 max-w-4xl font-serif text-6xl font-bold leading-[0.95] md:text-8xl">
                The Olive Court
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-white/78">
                {site.tagline}. Indian • Chinese • Italian • Mexican • Thai • Lebanese cuisine with live music, rooftop seating and signature drinks.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/menu">Explore Menu</ButtonLink>
                <ButtonLink href={`tel:${site.phones[0].replaceAll(" ", "")}`} variant="outline">Reserve Table</ButtonLink>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="glass-card rounded-2xl p-4"><Star className="mb-2 text-gold" /> <strong>{site.rating}</strong><p className="text-sm text-muted">Google rating</p></div>
                <div className="glass-card rounded-2xl p-4"><HeartHandshake className="mb-2 text-gold" /> <strong>{site.reviews}</strong><p className="text-sm text-muted">Guest reviews</p></div>
                <div className="glass-card rounded-2xl p-4"><Clock className="mb-2 text-gold" /> <strong>Open</strong><p className="text-sm text-muted">Until midnight</p></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] shadow-gold">
                <Image src="/images/hero.svg" alt="The Olive Court luxury dining ambience" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-black/45 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-gold">Premium rooftop lounge</p>
                  <p className="mt-2 font-serif text-3xl">A romantic multi-cuisine escape.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="about" className="px-4 py-24 lg:py-32">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle eyebrow="About" title="A dramatic open-air hangout for families, youth and fine-dining evenings." text={site.description} />
              <div className="grid gap-3 text-muted sm:grid-cols-2">
                {experiences.map((item) => <p key={item}>• {item}</p>)}
              </div>
            </div>
            <ImagePanel src="/images/ambience.svg" alt="The Olive Court ambience" className="min-h-[520px]" />
          </div>
        </section>

        <section className="bg-charcoal px-4 py-24 lg:py-32">
          <div className="container-shell">
            <SectionTitle centered eyebrow="Why choose us" title="Premium dining details in every moment." text="Every section of the experience is designed around comfort, ambience, variety and memorable hospitality." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = icons[index];
                return <LuxuryCard key={item.title}><Icon className="text-gold" size={34} /><h3 className="mt-5 font-serif text-2xl">{item.title}</h3><p className="mt-3 leading-7 text-muted">{item.text}</p></LuxuryCard>;
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 lg:py-32">
          <div className="container-shell">
            <SectionTitle eyebrow="Signature dishes" title="Chef-led favourites from across cuisines." text="A selected showcase of rich Indian classics, comforting rice plates and premium vegetarian signatures." />
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {signatureDishes.map((dish) => <LuxuryCard key={dish.name} className="overflow-hidden p-0"><div className="relative h-64"><Image src={dish.image} alt={dish.name} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" /></div><div className="p-6"><div className="flex items-start justify-between gap-5"><h3 className="font-serif text-2xl">{dish.name}</h3><span className="font-bold text-gold">{dish.price}</span></div><p className="mt-3 leading-7 text-muted">{dish.description}</p></div></LuxuryCard>)}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-4 py-24 lg:py-32">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <ImagePanel src="/images/mocktail.svg" alt="Craft mocktail" className="min-h-[520px]" />
            <div>
              <SectionTitle eyebrow="Multi-cuisine" title="One destination, seven culinary moods." text="From North Indian comfort and Chinese classics to Italian, Mexican, Thai and Lebanese favourites, the menu is built for every table." />
              <div className="grid gap-4 sm:grid-cols-2">
                {cuisines.map((cuisine) => <LuxuryCard key={cuisine} className="flex items-center gap-4"><ChefHat className="text-gold" /><span className="font-semibold">{cuisine}</span></LuxuryCard>)}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-24 lg:py-32">
          <div className="container-shell">
            <SectionTitle centered eyebrow="Gallery" title="Food, rooftop light and live-music energy." />
            <div className="grid auto-rows-[240px] gap-5 md:grid-cols-4">
              {gallery.map((image, index) => <div key={image.src} className={`relative overflow-hidden rounded-[1.5rem] ${index === 0 || index === 4 ? "md:row-span-2" : ""} ${index === 2 ? "md:col-span-2" : ""}`}><Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 768px) 25vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" /></div>)}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-charcoal px-4 py-24 lg:py-32">
          <div className="container-shell">
            <SectionTitle centered eyebrow="Reviews" title="Loved by locals, travellers and families." text="Real review highlights that reinforce the restaurant's premium ambience, warm service and strong food programme." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => <LuxuryCard key={review.name}><p className="text-gold">★★★★★</p><blockquote className="mt-5 leading-8 text-muted">“{review.quote}”</blockquote><p className="mt-6 font-serif text-xl">{review.name}</p><p className="text-sm text-white/45">{review.meta}</p></LuxuryCard>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 lg:py-32">
          <div className="container-shell overflow-hidden rounded-[2.5rem] bg-gold p-8 text-black md:p-14 lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div><p className="text-sm font-bold uppercase tracking-[0.3em]">Reserve your table today</p><h2 className="mt-3 font-serif text-4xl font-bold md:text-6xl">Experience one of Jodhpur's highest rated dining destinations.</h2></div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col"><ButtonLink href={`tel:${site.phones[0].replaceAll(" ", "")}`} variant="dark"><Phone className="mr-2" size={18} /> Call Now</ButtonLink><ButtonLink href={site.swiggyUrl} variant="outline">Book Table</ButtonLink></div>
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-4 py-24 lg:py-32">
          <div className="container-shell grid gap-6 lg:grid-cols-3">
            <LuxuryCard><MapPin className="text-gold" /><h3 className="mt-4 font-serif text-2xl">Addresses</h3>{site.addresses.map((address) => <p className="mt-3 leading-7 text-muted" key={address}>{address}</p>)}<a className="mt-5 inline-block text-gold" href={site.mapsUrl}>Open Google Maps</a></LuxuryCard>
            <LuxuryCard><Phone className="text-gold" /><h3 className="mt-4 font-serif text-2xl">Phone & Hours</h3><p className="mt-3 text-muted">{site.phones.join(" | ")}</p><p className="mt-2 text-muted">{site.hours}</p></LuxuryCard>
            <LuxuryCard><Instagram className="text-gold" /><h3 className="mt-4 font-serif text-2xl">Social</h3><a href={site.instagramUrl} className="mt-3 block text-muted">{site.instagramHandle}</a><p className="mt-2 text-muted">Follow for events, rooftop nights and food updates.</p></LuxuryCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
