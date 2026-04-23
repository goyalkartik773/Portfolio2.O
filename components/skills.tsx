"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code, Globe, Brain, Server, Database } from "lucide-react"

// Skill icon mapping similar to GitHub READMEs
const skillIcons: Record<string, string> = {
  // Programming Languages
  "Python": "https://skillicons.dev/icons?i=python",
  "JavaScript": "https://skillicons.dev/icons?i=js",
  "TypeScript": "https://skillicons.dev/icons?i=ts",
  "C++": "https://skillicons.dev/icons?i=cpp",
  "HTML5": "https://skillicons.dev/icons?i=html",
  "CSS3": "https://skillicons.dev/icons?i=css",
  "SQL": "https://skillicons.dev/icons?i=postgresql",
  
  // Machine Learning
  "TensorFlow": "https://skillicons.dev/icons?i=tensorflow",
  "Scikit-learn": "https://skillicons.dev/icons?i=sklearn",
  "NumPy": "https://skillicons.dev/icons?i=numpy",
  "Pandas": "https://skillicons.dev/icons?i=pandas",
  "Data Analytics": "https://skillicons.dev/icons?i=r",
  "Neural Networks": "https://skillicons.dev/icons?i=pytorch",
  "Matplotlib": "https://skillicons.dev/icons?i=matplotlib",
  "Jupyter": "https://skillicons.dev/icons?i=jupyter",
  
  // Generative AI
  "OpenAI API": "https://skillicons.dev/icons?i=openai",
  "Gemini API": "https://skillicons.dev/icons?i=google",
  "NLP": "https://skillicons.dev/icons?i=python",
  "LLM Integration": "https://skillicons.dev/icons?i=python",
  "Prompt Engineering": "https://skillicons.dev/icons?i=chatgpt",
  
  // Frontend Development
  "React.js": "https://skillicons.dev/icons?i=react",
  "Next.js": "https://skillicons.dev/icons?i=nextjs",
  "Redux Toolkit": "https://skillicons.dev/icons?i=redux",
  "TailwindCSS": "https://skillicons.dev/icons?i=tailwind",
  "Responsive Design": "https://skillicons.dev/icons?i=bootstrap",
  
  // Backend Development
  "Node.js": "https://skillicons.dev/icons?i=nodejs",
  "Express.js": "https://skillicons.dev/icons?i=express",
  "Python (Flask, Django)": "https://skillicons.dev/icons?i=django",
  "API Design": "https://skillicons.dev/icons?i=postman",
  "Socket.io": "https://skillicons.dev/icons?i=socket",
  "WebSockets": "https://skillicons.dev/icons?i=websocket",
  "JWT Authentication": "https://skillicons.dev/icons?i=jwt",
  "REST API": "https://skillicons.dev/icons?i=api",
  "GraphQL": "https://skillicons.dev/icons?i=graphql",
  
  // Databases & Tools
  "MongoDB": "https://skillicons.dev/icons?i=mongodb",
  "MySQL": "https://skillicons.dev/icons?i=mysql",
  "PostgreSQL": "https://skillicons.dev/icons?i=postgresql",
  "Firebase": "https://skillicons.dev/icons?i=firebase",
  "MongoDB Atlas": "https://skillicons.dev/icons?i=mongodb",
  "Database Design": "https://skillicons.dev/icons?i=prisma",
  
  // DevOps & Tools
  "Git": "https://skillicons.dev/icons?i=git",
  "GitHub": "https://skillicons.dev/icons?i=github",
  "VS Code": "https://skillicons.dev/icons?i=vscode",
  "Vercel": "https://skillicons.dev/icons?i=vercel",
  "Render": "https://skillicons.dev/icons?i=render",
  "Streamlit": "https://skillicons.dev/icons?i=streamlit",
  "CI/CD": "https://skillicons.dev/icons?i=githubactions",
  "Agile Development": "https://skillicons.dev/icons?i=jira",
}

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56,189,248,0.25)",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.25)",
    skills: [
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Data Analytics",
      "Neural Networks",
    ],
  },
  {
    icon: Brain,
    title: "Generative AI",
    color: "from-purple-500 to-pink-600",
    glowColor: "rgba(168,85,247,0.25)",
    skills: [
      "OpenAI API",
      "Gemini API",
      "NLP",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    icon: Globe,
    title: "Frontend Development",
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.25)",
    skills: ["React.js", "Next.js", "Redux Toolkit", "TailwindCSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-orange-400 to-amber-500",
    glowColor: "rgba(251,146,60,0.25)",
    skills: ["Node.js", "Express.js", "Python (Flask, Django)", "API Design", "Socket.io", "WebSockets", "JWT Authentication"],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(251,113,133,0.25)",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Firebase",
      "MongoDB Atlas",
      "Database Design",
    ],
  },
  {
    icon: Database,
    title: "DevOps & Tools",
    color: "from-indigo-400 to-purple-500",
    glowColor: "rgba(99,102,241,0.25)",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Render",
      "Streamlit",
      "CI/CD",
      "Agile Development",
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
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
            A comprehensive toolkit spanning web development, mobile apps, and modern technologies.
          </p>
        </motion.div>

        {/* Changed lg:grid-cols-3 to lg:grid-cols-6 to allow fractional spans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
                    animate={isMounted && isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.08 + skillIndex * 0.04,
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-600/50 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-500/30 hover:border-transparent hover:text-white hover:shadow-md transition-all duration-300 cursor-default"
                    style={
                      {
                        "--tw-gradient-from": category.color.includes("cyan")
                          ? "#22d3ee"
                          : category.color.includes("violet") || category.color.includes("purple")
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
                      const colors = category.color
                        .replace("from-", "")
                        .replace("to-", "")
                        .split(" ")
                        .filter(c => c.trim())
                      
                      const colorMap: Record<string, string> = {
                        "cyan-400": "#22d3ee",
                        "blue-500": "#3b82f6",
                        "violet-500": "#8b5cf6",
                        "purple-500": "#8b5cf6",
                        "purple-600": "#9333ea",
                        "emerald-400": "#34d399",
                        "teal-500": "#14b8a6",
                        "orange-400": "#fb923c",
                        "amber-500": "#f59e0b",
                        "rose-400": "#fb7185",
                        "pink-500": "#ec4899",
                      }
                      
                      const mappedColors = colors.map(c => colorMap[c] || c)
                      const gradient = `linear-gradient(135deg, ${mappedColors.join(", ")})`
                      el.style.background = gradient
                      el.style.boxShadow = `0 4px 15px ${category.glowColor}`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = ""
                      el.style.boxShadow = ""
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <img 
                        src={skillIcons[skill] || "https://skillicons.dev/icons?i=python"} 
                        alt={skill}
                        className="w-5 h-5"
                        onError={(e) => {
                          // Fallback for missing icons - use a generic icon
                          const target = e.target as HTMLImageElement;
                          target.src = "https://skillicons.dev/icons?i=python";
                        }}
                      />
                      <span>{skill}</span>
                    </div>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleProjectsClick}
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              View My Projects
            </button>
            <a
              href="/cv.pdf"
              download="CV.pdf"
              className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}