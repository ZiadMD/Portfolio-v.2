"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "SCU IEEE",
    role: "AI Technical Member",
    period: "Oct 2023 - Present",
    description:
      "Leading AI/ML initiatives and \
      developing innovative software solutions.",
    achievements: [
      "Intructed more than 5+ AI Session",
      "Made a Book Library App \"Bookish\"",
      "Making AI Models for detecting cardio diseases",
    ],
  },
  {
    id: 2,
    company: "SCU Racing Team",
    role: "Autonomous Software Team Member",
    period: "Mar 2024 - Oct 2024",
    description:
      "development of autonomous driving systems.",
    achievements: [
      "Bulid Autonomous Driving System",
      "Winning 6th Place in the 2024 EVER",
    ],
  },
  {
    id: 3,
    company: "SCU Racing Team",
    role: "Autonomous Software Team Leader",
    period: "Oct 2024 - Present",
    description:
      "Leading and teaching autonomous software development.",
    achievements: [
      "",],
  },
  // {
  //   id: 4,
  //   company: "Freelance",
  //   role: "Web Developer",
  //   period: "2018 - 2019",
  //   description:
  //     "Provided web development services to small businesses and startups. Specialized in creating custom websites and e-commerce solutions.",
  //   achievements: ["Completed 20+ client projects", "Built e-commerce platforms", "Established client relationships"],
  // },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey and the experiences that have shaped my career in software development and AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-400" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center border-4 border-gray-900"
                  >
                    <Briefcase size={16} className="text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-200">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
