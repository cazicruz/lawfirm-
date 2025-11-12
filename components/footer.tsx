import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Smith & Associates</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Dedicated to providing expert legal guidance with compassion and integrity for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#family-law" className="opacity-80 hover:opacity-100 transition-opacity">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/services#estate-planning" className="opacity-80 hover:opacity-100 transition-opacity">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/services#real-estate" className="opacity-80 hover:opacity-100 transition-opacity">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services#contracts" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+15551234567" className="opacity-80 hover:opacity-100 transition-opacity">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@smithassociates.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@smithassociates.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  123 Legal Ave, Suite 200
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8">
          <p className="text-center text-sm opacity-60">
            © 2025 Smith & Associates. All rights reserved. This is a legal website template.
          </p>
        </div>
      </div>
    </footer>
  )
}
