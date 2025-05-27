"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const Certifications = [
  "Zewail City AI",
  "Huawei HCIA-AI",
  "ITI AI",
  "Robotics Corner Software",
]

const skillCategories = [
  {
    title: "Software",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 35 },
      { name: "C", level: 60 },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Computer Vision", level: 80 },
      { name: "Natural Language Processing", level: 55 },
      { name: "Generative AI", level: 60 },
    ],
  },
  {
    title: "Robotics",
    skills: [
      { name: "ROS", level: 88 },
      { name: "Autonomous Driving", level: 80 },
      { name: "Control Systems", level: 55 },
      { name: "Robotics", level: 60 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Linux", level: 78 },
      { name: "Qt", level: 75 },
      // { name: "Figma", level: 88 },
    ],
  },
]

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const [width, setWidth] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level)
        controls.start({
          width: `${skill.level}%`,
          transition: { duration: 1.5, ease: "easeOut" },
        })
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, delay, controls])

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-blue-400 font-bold">{width}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text ">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * categoryIndex, duration: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} delay={categoryIndex * 200 + skillIndex * 100} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {Certifications.map(
              (cert, index) => (
                <motion.div
                  key={cert}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{cert}</p>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
