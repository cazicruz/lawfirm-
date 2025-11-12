import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Understanding Child Support: What You Need to Know",
      excerpt:
        "Child support is a legal obligation that ensures children receive financial support from both parents. Learn about calculation methods, modification options, and enforcement.",
      date: "December 10, 2024",
      author: "David Boies",
      category: "Family Law",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Estate Planning 101: Why Every Adult Needs a Will",
      excerpt:
        "A will is the foundation of any estate plan. Discover why having a valid will is crucial, what should be included, and how to get started with your estate planning.",
      date: "December 5, 2024",
      author: "David Boies",
      category: "Estate Planning",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Common Real Estate Transaction Pitfalls to Avoid",
      excerpt:
        "Buying or selling property involves significant financial and legal considerations. Learn about common mistakes and how proper legal review can protect you.",
      date: "November 28, 2024",
      author: "David Boies",
      category: "Real Estate",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Mediation vs. Litigation: Which Path is Right for You?",
      excerpt:
        "When facing a legal dispute, you have options. We compare mediation and litigation to help you understand which approach might work best for your situation.",
      date: "November 20, 2024",
      author: "David Boies",
      category: "General",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Protecting Your Digital Assets in Your Estate Plan",
      excerpt:
        "In today's digital world, your estate plan should account for online accounts and digital assets. Learn how to protect your digital legacy.",
      date: "November 15, 2024",
      author: "David Boies",
      category: "Estate Planning",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Importance of a Prenuptial Agreement",
      excerpt:
        "A prenuptial agreement protects both parties' interests before marriage. Discover the benefits and how to approach this sensitive topic with your partner.",
      date: "November 10, 2024",
      author: "David Boies",
      category: "Family Law",
      readTime: "7 min read",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Legal Insights & Articles
            </h1>
            <p className="text-xl text-muted-foreground">Expert guidance on family law, estate planning, and more</p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="border-border hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
                >
                  <div className="p-6 pb-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight flex-grow">{article.title}</h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{article.excerpt}</p>

                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
