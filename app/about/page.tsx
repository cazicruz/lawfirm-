import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, Users } from "lucide-react"

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About Our Firm</h1>
            <p className="text-xl text-muted-foreground">
              Meet the attorney dedicated to serving you with excellence and integrity.
            </p>
          </div>
        </section>

        {/* Attorney Bio Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="order-2 md:order-1">
                <img
                  src="/landingImage.jpg"
                  alt="David Boies, Attorney"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Bio */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">David Boies , Esq.</h2>
                  <p className="text-lg text-primary font-semibold">Founder & Lead Attorney</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience in family law and estate planning, David has helped hundreds of
                  clients navigate complex legal matters with confidence and clarity.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Education & Credentials</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Juris Doctor, State University School of Law, 2008</li>
                      <li>• Bachelor of Arts, Political Science, 2005</li>
                      <li>• Licensed to Practice in All State and Federal Courts</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Awards & Recognition</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Best Family Law Attorney, City Legal Awards 2023</li>
                      <li>• Super Lawyers Selection, 2022-2023</li>
                      <li>• ABA Member - Family Law Section</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "My approach is simple: listen carefully to my clients, provide honest counsel, and fight zealously
                  for their interests. I believe in building lasting relationships based on trust and transparency."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-border text-center">
                <div className="mb-4 flex justify-center">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards of legal practice and continuously pursue professional development.
                </p>
              </Card>

              <Card className="p-8 border-border text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Compassion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that legal matters are deeply personal and treat every client with empathy and respect.
                </p>
              </Card>

              <Card className="p-8 border-border text-center">
                <div className="mb-4 flex justify-center">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We operate with complete honesty and transparency, putting our clients' interests above all else.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
