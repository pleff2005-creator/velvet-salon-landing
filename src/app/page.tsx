import { Navbar } from "@/components/layout/Navbar";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { Promo } from "@/components/sections/Promo";
import { Categories } from "@/components/sections/Categories";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { salon } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: `Салон красоты ${salon.name}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Большая Дмитровка, 12",
    addressLocality: salon.city,
    addressCountry: "RU",
  },
  telephone: salon.phone,
  openingHours: "Mo-Su 10:00-21:00",
  priceRange: "₽₽",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span id="top" />
      <Navbar />
      <main>
        <Hero />
        <Promo />
        <Categories />
        <Pricing />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
