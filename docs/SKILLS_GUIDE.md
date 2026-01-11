# Skills Section Guide

This guide explains how to add, modify, or remove skills from your portfolio.

## Quick Start

To add a new skill, edit `data/skills.json`:

```json
{
  "name": "Skill Name",
  "icon": "iconkey"
}
```

That's it! The skill will automatically appear with the correct icon.

---

## File Locations

| File | Purpose |
|------|---------|
| `data/skills.json` | Add/edit/remove skills here |
| `components/skills.tsx` | Icon registry (only edit to add new icons) |

---

## JSON Structure

```json
{
  "skillCategories": [
    {
      "title": "Category Name",
      "icon": "categoryIconKey",
      "skills": [
        { "name": "Skill 1", "icon": "iconkey1" },
        { "name": "Skill 2", "icon": "iconkey2" }
      ]
    }
  ]
}
```

---

## Available Icon Keys

### Programming Languages

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `python` | Python | `typescript` | TypeScript |
| `javascript` | JavaScript | `cplusplus` | C++ |
| `csharp` | C# | `rust` | Rust |
| `go` | Go | `swift` | Swift |
| `kotlin` | Kotlin | `dart` | Dart |

### Frontend Frameworks

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `react` | React | `nextjs` | Next.js |
| `vuejs` | Vue.js | `angular` | Angular |
| `tailwindcss` | Tailwind CSS | `flutter` | Flutter |

### Backend & APIs

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `nodejs` | Node.js | `fastapi` | FastAPI |
| `flask` | Flask | `django` | Django |
| `graphql` | GraphQL | `prisma` | Prisma |

### AI & Machine Learning

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `pytorch` | PyTorch | `tensorflow` | TensorFlow |
| `langchain` | LangChain | `huggingface` | Hugging Face |
| `openai` | OpenAI | `opencv` | OpenCV |
| `numpy` | NumPy | `pandas` | Pandas |
| `scikitlearn` | Scikit-learn | `keras` | Keras |
| `jupyter` | Jupyter | | |

### Databases

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `postgresql` | PostgreSQL | `mysql` | MySQL |
| `sqlite` | SQLite | `mongodb` | MongoDB |
| `redis` | Redis | `firebase` | Firebase |
| `supabase` | Supabase | | |

### DevOps & Cloud

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `docker` | Docker | `kubernetes` | Kubernetes |
| `aws` | AWS | `gcp` | Google Cloud |
| `azure` | Azure | `vercel` | Vercel |
| `github` | GitHub | `linux` | Linux |
| `cmake` | CMake | | |

### Robotics & Hardware

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `ros` | ROS/ROS2 | `arduino` | Arduino |
| `raspberrypi` | Raspberry Pi | | |

### Design & Tools

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `figma` | Figma | `blender` | Blender |
| `postman` | Postman | `jira` | Jira |
| `notion` | Notion | | |

### Game Development

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `unity` | Unity | `godot` | Godot |

### Other

| Key | Icon | Key | Icon |
|-----|------|-----|------|
| `electron` | Electron | | |

---

## Concept Icons (No Brand Logo)

Use these for abstract concepts that don't have official logos:

| Key | Description | Best For |
|-----|-------------|----------|
| `brain` | 🧠 Brain | AI, ML, Intelligence |
| `eye` | 👁️ Eye | Computer Vision, Observation |
| `cpu` | ⚡ CPU | Deep Learning, Processing |
| `sparkles` | ✨ Sparkles | Generative AI, Magic |
| `layers` | 📚 Layers | OOP, Architecture |
| `settings` | ⚙️ Settings | Configuration, SOLID |
| `bookopen` | 📖 Book | Design Patterns, Learning |
| `code` | 💻 Code | General Programming |
| `wand` | 🪄 Wand | Prompt Engineering |
| `messagesquare` | 💬 Message | RAG, NLP, Chat |
| `database` | 🗄️ Database | Data, Storage |
| `server` | 🖥️ Server | Backend, Infrastructure |
| `globe` | 🌐 Globe | Web, Internet |
| `terminal` | ⌨️ Terminal | CLI, Shell |
| `wrench` | 🔧 Wrench | Tools, Utilities |
| `cog` | ⚙️ Cog | Settings, Configuration |
| `blocks` | 🧱 Blocks | DSA, Building Blocks |
| `network` | 🔗 Network | Networking, Connections |
| `shield` | 🛡️ Shield | Security, Protection |
| `zap` | ⚡ Zap | Speed, Performance |
| `bot` | 🤖 Bot | Automation, Robots |
| `gitbranch` | 🌿 Branch | Version Control |

---

## Examples

### Adding a New Skill

To add "Rust" to Programming Languages:

```json
{
  "title": "Programming Languages",
  "icon": "code",
  "skills": [
    { "name": "C++", "icon": "cplusplus" },
    { "name": "Python", "icon": "python" },
    { "name": "Rust", "icon": "rust" }  // ← Add this line
  ]
}
```

### Adding a New Category

```json
{
  "title": "Game Development",
  "icon": "blocks",
  "skills": [
    { "name": "Unity", "icon": "unity" },
    { "name": "Godot", "icon": "godot" },
    { "name": "Blender", "icon": "blender" }
  ]
}
```

### Using a Concept Icon

For skills without a brand logo:

```json
{ "name": "System Design", "icon": "network" }
{ "name": "API Design", "icon": "server" }
{ "name": "Security", "icon": "shield" }
```

---

## Adding New Icons to the Registry

If you need an icon that's not in the list above:

### 1. Find the Icon

- **Brand icons**: Check [react-icons Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
- **Concept icons**: Check [Lucide Icons](https://lucide.dev/icons/)

### 2. Add to `skills.tsx`

**Step 1**: Import the icon at the top of the file:

```tsx
// For brand icons (react-icons)
import { SiNewicon } from "react-icons/si"

// For concept icons (lucide)
import { NewIcon } from "lucide-react"
```

**Step 2**: Add to the `iconRegistry` object:

```tsx
const iconRegistry = {
  // ... existing icons
  newicon: SiNewicon,      // for brand icons
  newiconkey: NewIcon,     // for concept icons
}
```

### 3. Use in JSON

```json
{ "name": "New Skill", "icon": "newicon" }
```

---

## Tips

1. **Icon keys are lowercase** - Use `python` not `Python`
2. **Check the registry first** - Many popular tools are already included
3. **Fallback icon** - If an icon key doesn't exist, a default code icon is used
4. **Category icons** - Use concept icons for categories (like `code`, `brain`, `layers`)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Icon not showing | Check if the icon key is spelled correctly (lowercase) |
| Wrong icon | Verify the key matches the registry in `skills.tsx` |
| New icon not working | Make sure you imported it and added it to `iconRegistry` |
| Build error | Check for typos in the import statement |

---

## Quick Reference Card

```
LANGUAGES:     python, typescript, javascript, cplusplus, csharp, rust, go, swift, kotlin, dart
FRONTEND:      react, nextjs, vuejs, angular, tailwindcss, flutter
BACKEND:       nodejs, fastapi, flask, django, graphql
AI/ML:         pytorch, tensorflow, langchain, huggingface, openai, opencv, numpy, pandas
DATABASES:     postgresql, mysql, mongodb, redis, firebase, supabase
DEVOPS:        docker, kubernetes, aws, gcp, azure, github, linux
ROBOTICS:      ros, arduino, raspberrypi
CONCEPTS:      brain, eye, cpu, sparkles, layers, settings, bookopen, code, wand, messagesquare
```
