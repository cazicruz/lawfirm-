import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Services from "@/components/services-overview"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta-section"
import ProofOfWork from "@/components/proofOfWork"
import PracticeAreas from "@/components/practiceArea"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PracticeAreas />
        <Services />
        <Testimonials />
        <ProofOfWork />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
