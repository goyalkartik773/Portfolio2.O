import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"
import TwinklingStars from "@/components/TwinklingStars"
import MouseTrail from "@/components/MouseTrail"
import PerformanceMonitor from "@/components/performance-monitor"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio - Kartik Goel",
  description: "Full Stack Developer Portfolio - Kartik Goel",
  keywords: ["Full Stack", "developer", "react", "nextjs", "portfolio", "Kartik Goel"],
  authors: [{ name: "Kartik Goel" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <TwinklingStars />
          <MouseTrail />
          <LoadingScreen />
          <PerformanceMonitor />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--toast-bg)",
                color: "var(--toast-color)",
                border: "1px solid var(--toast-border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
