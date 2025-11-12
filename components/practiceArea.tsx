import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function PracticeAreas() {
  const areas = [
    {
      title: "Personal Injury",
      description:
        "We represent clients who have suffered severe injuries due to negligence. From car accidents to slip and fall cases, we fight to secure fair compensation for victims and their families.",
      image: "brain-injury.jpg",
    },
    {
      title: "Truck & Commercial Vehicle Accidents",
      description:
        "Truck accidents often lead to catastrophic injuries. Our firm has extensive experience handling complex commercial vehicle cases involving multiple parties and insurance carriers.",
      image: "/Head-On-Crash.webp",
    },
    {
      title: "Wrongful Death",
      description:
        "When negligence results in a tragic loss, we stand by families to seek justice and accountability. We pursue damages that honor your loved one’s legacy and ease financial burdens.",
      image: "oip.webp",
    },
    {
      title: "Product Liability",
      description:
        "Defective products can cause life-altering harm. We hold manufacturers and distributors responsible for unsafe designs, manufacturing defects, and inadequate warnings.",
      image: "oip (1).webp",
    },
    {
      title: "Premises Liability",
      description:
        "Property owners have a duty to maintain safe environments. We represent clients injured due to unsafe premises, including hotel negligence, falls, and security failures.",
      image: "oip (3).webp",
    },
    {
      title: "Catastrophic Injury",
      description:
        "We handle cases involving brain injuries, spinal cord damage, burns, and other life-changing trauma. Our goal is to secure compensation that supports lifelong care and recovery.",
      image: "oip (2).webp",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Practice Areas in Injury Law
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            David Boies’s experience spans across major areas of injury law — dedicated to protecting victims and delivering justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, idx) => (
            <Card key={idx} className="overflow-hidden border-border">
              <div className="relative w-full h-64">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
