import type React from "react"
import "@/app/globals.css"
import { Scheherazade_New } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-scheherazade",
})

export const metadata = {
  title: "مولد النص العربي | نسخ ناب - أداة توليد نص عربي للتصميم",
  description: "أداة مجانية لتوليد نص عربي للتصميم والنماذج. يمكنك نسخ النص بسهولة والتحكم في طول النص حسب احتياجاتك.",
  keywords: [
    "مولد النص العربي",
    "نص عربي",
    "لوريم إيبسوم عربي",
    "نص تجريبي",
    "نص للتصميم",
    "توليد نص",
    "نص عشوائي",
    "نسخ ناب",
  ],
  authors: [{ name: "نسخ ناب" }],
  creator: "نسخ ناب",
  publisher: "نسخ ناب",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://naskhnab.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "مولد النص العربي | نسخ ناب - أداة توليد نص عربي للتصميم",
    description:
      "أداة مجانية لتوليد نص عربي للتصميم والنماذج. يمكنك نسخ النص بسهولة والتحكم في طول النص حسب احتياجاتك.",
    url: "https://naskhnab.vercel.app",
    siteName: "نسخ ناب - مولد النص العربي",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مولد النص العربي | نسخ ناب - أداة توليد نص عربي للتصميم",
    description: "أداة مجانية لتوليد نص عربي للتصميم والنماذج",
    site: "@naskhnab",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={scheherazade.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
          <Toaster />
          <Analytics />
        </ThemeProvider>

        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "نسخ ناب - مولد النص العربي",
              description:
                "أداة مجانية لتوليد نص عربي للتصميم والنماذج. يمكنك نسخ النص بسهولة والتحكم في طول النص حسب احتياجاتك.",
              url: "https://naskhnab.vercel.app",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web",
              inLanguage: "ar",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: "توليد نص عربي، التحكم في طول النص، نسخ النص بسهولة",
            }),
          }}
        />
      </body>
    </html>
  )
}
