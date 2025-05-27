"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import CurrentWork from "@/components/current-work"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import BackgroundAnimation from "@/components/background-animation"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-400 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CurrentWork />
        <Contact />
      </main>
    </div>
  )
}
