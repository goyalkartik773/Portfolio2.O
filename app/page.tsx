"use client"

import { useEffect, Suspense, useState } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import ScrollUp from "@/components/scroll-up"

// Lazy load heavy components for better mobile performance
const About = dynamic(() => import("@/components/about"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
})

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
})

const Services = dynamic(() => import("@/components/services"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
})

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
})

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: false
})

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400 transition-colors duration-300">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        {isMounted && (
          <>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading About...</div>}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Skills...</div>}>
              <Skills />
            </Suspense>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Services...</div>}>
              <Services />
            </Suspense>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Projects...</div>}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </>
        )}
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}
