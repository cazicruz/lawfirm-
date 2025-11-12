import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smith & Associates – Family Law & Estate Planning",
  description:
    "Experienced family law and estate planning attorney providing trusted legal services. Schedule your free consultation today.",
  icons: {
    icon: [
      {
        url: "/fave.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/fave.png",
        media: "(prefers-color-scheme: dark)",
      },

    ],
    apple: "/fave.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
