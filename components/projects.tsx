"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AuthMaster",
    description: "A secure login system built with Python's Tkinter library featuring sign-up, sign-in, and SHA-256 password hashing capabilities.",
    image: "Projects/AuthMaster.jpeg",
    tech: ["Python", "GUI", "Tkinter", "SHA-256"],
    category: "Software",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/AuthMaster "
  },
  {
    id: 2,
    title: "LMS",
    description: "A Library Management System implemented in C++ using doubly linked lists for efficient book record management with sorting and searching capabilities.",
    image: "Projects/LMS.jpeg",
    tech: ["C++", "Data Structures", "Algorithms"],
    category: "Software",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/LMS "
  },
  {
    id: 3,
    title: "Qt-Cascade-app",
    description: "A desktop object detection application built with Qt and OpenCV using Haar cascade classifiers for real-time computer vision tasks.",
    image: "Projects/Qt-Cascade-app.jpeg",
    tech: ["C++", "Qt", "OpenCV", "Computer Vision"],
    category: "Software",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/Qt-Cascade-app "
  },
  {
    id: 4,
    title: "Cat-Dog Classifier",
    description: "A PySide6 application using TensorFlow for image classification, featuring a customizable model to distinguish between cats and dogs.",
    image: "Projects/cat-dog-classifier.png",
    tech: ["Python", "PySide6", "TensorFlow", "Deep Learning"],
    category: "AI",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/cat-dog-classifier "
  },
  {
    id: 5,
    title: "EVER 5th Generation",
    description: "An AI-powered autonomous truck system combining machine learning, PID controllers, and computer vision for intelligent lane changes.",
    image: "Projects/EVER.png",
    tech: ["Python", "ROS", "Autonomous Driving"],
    category: "Robotics",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/EVER_CLoseLoop "
  },
  {
    id: 6,
    title: "Numerical Analysis Project",
    description: "A Linux-optimized C++17 application implementing numerical analysis algorithms with Qt6 GUI for root finding and curve fitting.",
    image: "Projects/NAP.png",
    tech: ["C++", "Qt", "Math", "Linux"],
    category: "Software",
    demoUrl: "#",
    githubUrl: "https://github.com/ZiadMD/Numerical-Analysis-project "
  },
]

const categories = ["All", "Software", "AI", "Robotics"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text ">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative digital solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-green-400 text-white"
                  : "bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-blue-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      {project.demoUrl !== "#" && (
                        <motion.a
                          href={project.demoUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
                          aria-label="View Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
