"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import skillsData from "@/data/skills.json"
import certificationsData from "@/data/certifications.json"

// Official brand icons from react-icons
import { 
  SiCplusplus, 
  SiPython, 
  SiTypescript,
  SiPostgresql,
  SiRos,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiFastapi,
  SiGithub,
  SiLinux,
  SiDocker,
  SiMongodb,
  SiCmake,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonwebservices,
  SiKubernetes,
  SiRedis,
  SiGraphql,
  SiFlask,
  SiDjango,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiPostman,
  SiJira,
  SiNotion,
  SiFigma,
  SiVercel,
  SiHuggingface,
  SiOpenai,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiJupyter,
  SiArduino,
  SiRaspberrypi,
  SiUnity,
  SiGodotengine,
  SiBlender,
  SiGooglecloud,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiElectron,
  SiRust,
  SiGo,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
} from "react-icons/si"

import { TbBrandCSharp } from "react-icons/tb"

// Lucide icons for concepts without brand icons
import {
  Code2,
  Brain,
  Eye,
  Sparkles,
  Layers,
  Settings,
  BookOpen,
  Cpu,
  MessageSquare,
  Wand2,
  Database,
  Server,
  Globe,
  Terminal,
  Wrench,
  Cog,
  Blocks,
  Network,
  Shield,
  Zap,
  Bot,
  GitBranch,
} from "lucide-react"

const { skillCategories } = skillsData
const { certifications } = certificationsData

// ===== ICON REGISTRY =====
// Add new icons here to use them in skills.json
// Format: "iconKey": IconComponent
const iconRegistry: { [key: string]: React.ComponentType<{ className?: string }> } = {
  // Brand Icons (react-icons/si)
  cplusplus: SiCplusplus,
  python: SiPython,
  typescript: SiTypescript,
  javascript: SiJavascript,
  csharp: TbBrandCSharp,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  ros: SiRos,
  opencv: SiOpencv,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  langchain: SiLangchain,
  fastapi: SiFastapi,
  flask: SiFlask,
  django: SiDjango,
  github: SiGithub,
  linux: SiLinux,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  mongodb: SiMongodb,
  redis: SiRedis,
  firebase: SiFirebase,
  supabase: SiSupabase,
  prisma: SiPrisma,
  cmake: SiCmake,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  tailwindcss: SiTailwindcss,
  graphql: SiGraphql,
  aws: SiAmazonwebservices,
  gcp: SiGooglecloud,
  vercel: SiVercel,
  postman: SiPostman,
  jira: SiJira,
  notion: SiNotion,
  figma: SiFigma,
  huggingface: SiHuggingface,
  openai: SiOpenai,
  numpy: SiNumpy,
  pandas: SiPandas,
  scikitlearn: SiScikitlearn,
  keras: SiKeras,
  jupyter: SiJupyter,
  arduino: SiArduino,
  raspberrypi: SiRaspberrypi,
  unity: SiUnity,
  godot: SiGodotengine,
  blender: SiBlender,
  electron: SiElectron,
  rust: SiRust,
  go: SiGo,
  swift: SiSwift,
  kotlin: SiKotlin,
  dart: SiDart,
  flutter: SiFlutter,
  
  // Concept Icons (lucide-react)
  code: Code2,
  brain: Brain,
  eye: Eye,
  sparkles: Sparkles,
  layers: Layers,
  settings: Settings,
  bookopen: BookOpen,
  cpu: Cpu,
  messagesquare: MessageSquare,
  wand: Wand2,
  database: Database,
  server: Server,
  globe: Globe,
  terminal: Terminal,
  wrench: Wrench,
  cog: Cog,
  blocks: Blocks,
  network: Network,
  shield: Shield,
  zap: Zap,
  bot: Bot,
  gitbranch: GitBranch,
}

// Helper function to get icon component
function getIcon(iconKey: string | undefined, size: "sm" | "md" = "sm") {
  const sizeClass = size === "sm" ? "w-5 h-5" : "w-6 h-6"
  const IconComponent = iconKey ? iconRegistry[iconKey] : Code2
  return IconComponent ? <IconComponent className={sizeClass} /> : <Code2 className={sizeClass} />
}

function SkillItem({ skill, delay }: { skill: { name: string; icon?: string }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="group flex items-center gap-2.5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-blue-900/30 hover:to-purple-900/30 border border-gray-700/50 hover:border-blue-500/60 rounded-xl px-4 py-2.5 transition-all duration-300 cursor-default shadow-lg hover:shadow-blue-500/10"
    >
      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
        {getIcon(skill.icon, "sm")}
      </div>
      <span className="text-gray-200 group-hover:text-white font-medium text-sm transition-colors duration-300">{skill.name}</span>
    </motion.div>
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
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category header */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20 text-blue-400">
                  {getIcon(category.icon, "md")}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="relative flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skill.name} skill={skill} delay={categoryIndex * 4 + skillIndex} />
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
            {certifications.map(
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
