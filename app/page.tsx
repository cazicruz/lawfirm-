import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Services from "@/components/services-overview"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
