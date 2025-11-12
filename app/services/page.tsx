import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function Services() {
  const serviceDetails = [
    {
      id: "family-law",
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description: "Comprehensive representation in all family law matters",
      services: [
        {
          name: "Divorce & Separation",
          details:
            "Expert guidance through contested and uncontested divorces, including property division and spousal support.",
        },
        {
          name: "Child Custody & Support",
          details: "Zealous advocacy to protect your parental rights and ensure fair child support arrangements.",
        },
        {
          name: "Prenuptial Agreements",
          details: "Thorough preparation of prenuptial and postnuptial agreements to protect your interests.",
        },
        {
          name: "Adoption & Guardianship",
          details: "Compassionate legal support through the adoption and guardianship process.",
        },
      ],
    },
    {
      id: "estate-planning",
      title: "Estate Planning",
      icon: "📋",
      description: "Secure your legacy and protect your family's future",
      services: [
        {
          name: "Wills & Trusts",
          details: "Custom-drafted wills and trusts to ensure your assets are distributed according to your wishes.",
        },
        {
          name: "Probate Administration",
          details: "Efficient handling of estate probate and trust administration matters.",
        },
        {
          name: "Power of Attorney",
          details: "Comprehensive durable power of attorney documents for financial and healthcare decisions.",
        },
        {
          name: "Asset Protection",
          details: "Strategic planning to protect your assets from creditors and unforeseen circumstances.",
        },
      ],
    },
    {
      id: "real-estate",
      title: "Real Estate & Property",
      icon: "🏠",
      description: "Smooth transactions and effective dispute resolution",
      services: [
        {
          name: "Property Purchase & Sale",
          details: "Complete legal representation in residential and commercial property transactions.",
        },
        {
          name: "Lease Agreements",
          details: "Thorough drafting and review of commercial and residential lease agreements.",
        },
        {
          name: "Property Disputes",
          details: "Resolution of boundary disputes, easements, and other property-related conflicts.",
        },
        { name: "Title Issues", details: "Expert handling of title defects, liens, and chain of title problems." },
      ],
    },
    {
      id: "contracts",
      title: "Contract & Business Law",
      icon: "📝",
      description: "Protect your business interests with comprehensive legal guidance",
      services: [
        {
          name: "Contract Drafting",
          details: "Professional drafting of purchase agreements, service contracts, and business agreements.",
        },
        { name: "Contract Review", details: "Thorough analysis to identify risks and ensure favorable terms." },
        {
          name: "Business Formation",
          details: "Guidance on choosing the right business structure and formation documents.",
        },
        { name: "Dispute Resolution", details: "Representation in contract disputes and business litigation." },
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Legal Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive legal representation across multiple practice areas
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-20">
            {serviceDetails.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={
                  idx % 2 === 0
                    ? "md:grid md:grid-cols-2 gap-12 items-start"
                    : "md:grid md:grid-cols-2 gap-12 items-start"
                }
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                </div>

                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="space-y-4">
                    {service.services.map((item, itemIdx) => (
                      <Card key={itemIdx} className="p-6 border-border">
                        <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Client Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Initial Consultation</h3>
                  <p className="text-muted-foreground">
                    We listen carefully to understand your situation, concerns, and goals in a confidential setting.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Strategy & Planning</h3>
                  <p className="text-muted-foreground">
                    We develop a clear, personalized legal strategy and explain all available options and potential
                    outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Execution & Representation</h3>
                  <p className="text-muted-foreground">
                    We handle all aspects of your case with diligence, keeping you informed at every step.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Resolution & Support</h3>
                  <p className="text-muted-foreground">
                    We work toward the best possible resolution and provide guidance during the transition period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
