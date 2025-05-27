"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Code, Zap, Users } from "lucide-react"

const currentProjects = [
  // {
  //   id: 1,
  //   title: "AI-Powered Dashboard App",
  //   description:
  //     "Building an intelligent analytics dashboard with machine learning capabilities for real-time data insights.",
  //   progress: 75,
  //   status: "In Development",
  //   tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
  //   icon: Zap,
  //   color: "from-purple-500 to-pink-500",
  // },
  // {
  //   id: 2,
  //   title: "Open Source UI Library",
  //   description: "Contributing to a comprehensive React component library with accessibility-first design principles.",
  //   progress: 60,
  //   status: "Contributing",
  //   tech: ["React", "TypeScript", "Storybook", "Jest"],
  //   icon: Code,
  //   color: "from-blue-500 to-cyan-500",
  // },
  // {
  //   id: 3,
  //   title: "Team Collaboration Platform",
  //   description: "Developing a modern workspace solution with real-time collaboration and project management features.",
  //   progress: 40,
  //   status: "Planning",
  //   tech: ["Next.js", "Socket.io", "Redis", "Docker"],
  //   icon: Users,
  //   color: "from-green-500 to-emerald-500",
  // },
]

export default function CurrentWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="current-work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Currently{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">
              Working On
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exciting projects and initiatives I'm actively developing and contributing to.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                {/* Project Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <project.icon size={32} className="text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-blue-400" />
                      <span className="text-sm text-blue-400 font-medium">{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Progress</span>
                    <span className="text-sm font-bold text-blue-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${project.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities, innovative projects, and potential collaborations.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-green-400 px-8 py-3 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
