import { Card } from "@/components/ui/card"
import { FileText, Users, Home, Heart,AlertCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate support for divorce, custody, and family-related legal issues.",
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Tailored wills and trusts to ensure your wishes are honored and your legacy is protected.",
    },
    {
      icon: Home,
      title: "Property & Real Estate",
      description: "Expert assistance in property transactions and resolving real estate disputes efficiently.",
    },
    {
      icon: AlertCircle,
      title: "Personal Injury Law",
      description: "Dedicated representation for those injured due to negligence, ensuring you receive fair compensation.",
    },
    {
      icon: Users,
      title: "Contract Law",
      description: "Thorough contract drafting and review to safeguard your business interests and agreements.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Legal Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in areas of law that matter most to you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
