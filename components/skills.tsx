"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Globe, Brain, Server, Database } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Core Languages",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56,189,248,0.25)",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Dart", "PHP"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.25)",
    skills: [
      "Generative AI",
      "RAG",
      "LangChain",
      "Hugging Face",
      "Machine Learning",
      "Deep Learning",
      "NLP",
    ],
  },
  {
    icon: Globe,
    title: "Frontend / Mobile",
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.25)",
    skills: ["Flutter", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend / APIs",
    color: "from-orange-400 to-amber-500",
    glowColor: "rgba(251,146,60,0.25)",
    skills: ["Node.js", "Express", "Flask", "FastAPI", "RESTful API", "WebSocket"],
  },
  {
    icon: Database,
    title: "Databases, Cloud & DevOps",
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(251,113,133,0.25)",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Azure",
      "Supabase",
      "Docker",
      "Git",
      "CI/CD",
      "Ngrok",
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="skills"
      className="bg-slate-50 dark:bg-slate-800 py-24 transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Technical <span className="text-blue-500 dark:text-blue-400">Expertise</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Changed lg:grid-cols-3 to lg:grid-cols-6 to allow fractional spans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`relative bg-white dark:bg-slate-700/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 dark:border-slate-600/40 hover:border-transparent transition-all duration-500 group hover:shadow-xl ${
                // Boxes 1-3 span 2 cols (3 per row), Boxes 4-5 span 3 cols (2 per row) on LG screens
                categoryIndex < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${
                // Box 5 spans 2 columns on MD screens to center it on the 3rd row
                categoryIndex === 4 ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ background: category.glowColor }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.08 + skillIndex * 0.04,
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-600/50 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-500/30 hover:border-transparent hover:text-white hover:shadow-md transition-all duration-300 cursor-default"
                    style={
                      {
                        "--tw-gradient-from": category.color.includes("cyan")
                          ? "#22d3ee"
                          : category.color.includes("violet")
                            ? "#8b5cf6"
                            : category.color.includes("emerald")
                              ? "#34d399"
                              : category.color.includes("orange")
                                ? "#fb923c"
                                : "#fb7185",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.background = `linear-gradient(135deg, ${category.color
                        .replace("from-", "")
                        .replace("to-", "")
                        .split(" ")
                        .map((c) => {
                          const colorMap: Record<string, string> = {
                            "cyan-400": "#22d3ee",
                            "blue-500": "#3b82f6",
                            "violet-500": "#8b5cf6",
                            "purple-600": "#9333ea",
                            "emerald-400": "#34d399",
                            "teal-500": "#14b8a6",
                            "orange-400": "#fb923c",
                            "amber-500": "#f59e0b",
                            "rose-400": "#fb7185",
                            "pink-500": "#ec4899",
                          }
                          return colorMap[c] || c
                        })
                        .join(", ")})`
                      el.style.boxShadow = `0 4px 15px ${category.glowColor}`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = ""
                      el.style.boxShadow = ""
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={handleProjectsClick}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}