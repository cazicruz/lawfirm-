import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Mitchell",
      title: "Family Law Client",
      content:
        "David handled my divorce with such professionalism and empathy. David  guided me through every step and achieved an excellent outcome.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Estate Planning Client",
      content:
        "I felt completely at ease working with the David. He explained everything clearly and made sure all my assets are properly protected.",
      rating: 5,
    },
    {
      name: "Patricia Rodriguez",
      title: "Business Owner",
      content:
        "Exceptional service on our contract review. He caught issues I would have missed and saved us significant money.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied clients we've had the privilege to serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
