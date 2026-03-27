import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PropertySearch } from "@/components/home/property-search"
import { FeaturedListings } from "@/components/home/featured-listings"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { AgentPreview } from "@/components/home/agent-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PropertySearch />
        <FeaturedListings />
        <WhyChooseUs />
        <AgentPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
