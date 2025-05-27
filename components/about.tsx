"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glassmorphism Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-400/20 rounded-2xl backdrop-blur-sm border border-gray-900" />

              {/* Profile Image */}
              <div className="relative w-full h-full p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75117432"
                  alt="Github Profile picture"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full" />
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Computer Engineering student with experience creating small software and Ai projects,
                My journey began with a curiosity for how things work, which evolved into a love for building things that work beautifully.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community. I believe in the power of clean code, user-centered
                design, and continuous learning.
              </p>

              <p>
                My expertise spans AI technologies, Software and emerging frameworks. I'm particularly
                passionate about creating accessible, performant applications that provide exceptional user experiences.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {[
                { number: "6+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" },
                // { number: "+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
