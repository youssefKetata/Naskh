import type React from "react"
import "@/app/globals.css"
import { Scheherazade_New } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-scheherazade",
})

export const metadata = {
  title: "مولد النص العربي",
  description: "أداة لتوليد نص عربي للتصميم والنماذج",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={scheherazade.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
