import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-background py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Your Trusted Legal Partner
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in family law and estate planning, we provide compassionate, expert
              guidance when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/professional-attorney-office.png"
              alt="Professional attorney in modern office"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
