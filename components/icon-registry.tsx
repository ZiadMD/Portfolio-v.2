// Icon registry with only used icons - direct imports for faster compilation
import { 
  SiCplusplus,
  SiPython,
  SiPostgresql,
  SiTypescript,
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
} from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import {
  Code2,
  Layers,
  Settings,
  BookOpen,
  Brain,
  Cpu,
  Eye,
  Sparkles,
  MessageSquare,
  Wand2,
} from "lucide-react"

// Only includes icons actually used in skills.json
export const iconRegistry = {
  // Brand icons (react-icons)
  cplusplus: SiCplusplus,
  python: SiPython,
  postgresql: SiPostgresql,
  typescript: SiTypescript,
  csharp: TbBrandCSharp,
  ros: SiRos,
  opencv: SiOpencv,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  langchain: SiLangchain,
  fastapi: SiFastapi,
  github: SiGithub,
  linux: SiLinux,
  docker: SiDocker,
  mongodb: SiMongodb,
  cmake: SiCmake,
  
  // Lucide icons for concepts
  code: Code2,
  layers: Layers,
  settings: Settings,
  bookopen: BookOpen,
  brain: Brain,
  cpu: Cpu,
  eye: Eye,
  sparkles: Sparkles,
  messagesquare: MessageSquare,
  wand: Wand2,
}
