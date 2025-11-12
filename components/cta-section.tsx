import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Discuss Your Legal Matter?</h2>
        <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
          Schedule a confidential consultation today. We're here to answer your questions and help you understand your
          options.
        </p>
        <Link href="/contact">
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Schedule Your Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  )
}
