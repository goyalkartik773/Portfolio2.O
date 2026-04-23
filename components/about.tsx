"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Code, Brain, GraduationCap, Trophy, Lightbulb, SwordsIcon, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep Learning & Analytics",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "LLMs & Prompt Engineering",
  },
  {
    icon: SwordsIcon,
    title: "Competitive Programmer",
    description: "CF 1300+ | LC 1700+ | CC 1600+ | 1000+ Problems",
  },
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "End-to-end Development",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left lg:order-1"
          >
            <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              My <span className="text-blue-500 dark:text-blue-400">Intro</span>
            </h3>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-6">About Me</h2>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              <p className="text-lg">
                I'm a passionate Computer Science Engineering student at JIIT NOIDA with a strong foundation in full-stack development and competitive programming. I love building scalable web applications and solving complex problems through clean, efficient code.
              </p>
              <p>
                My expertise spans MERN/Next.js stack, data structures & algorithms, and emerging AI/ML technologies. I'm actively involved in competitive programming and always eager to learn new technologies and tackle challenging problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                  <highlight.icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm mb-1">{highlight.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleContactClick}
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Let's Collaborate
            </button>
          </motion.div>

          {/* Developer Info Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="justify-self-center lg:order-2 w-full max-w-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              {/* Card content */}
              <div className="relative z-10 p-8">
                {/* Education Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mb-8"
                >
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Education</h3>
                  </div>

                  <div className="bg-white/20 dark:bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                      Jaypee Institute of Information Technology (JIIT)
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2023 – 2027</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Bachelor of Technology in Computer Science Engineering
                    </p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100">CGPA:</span>
                      <span className="ml-2 text-sm text-blue-500 dark:text-blue-400 font-semibold">8.5</span>
                    </div>
                  </div>
                </motion.div>

                {/* Highlights Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-8"
                >
                  <div className="flex items-center mb-4">
                    <Trophy className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Highlights</h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                         &#x1F3C6; Active competitive programmer on LeetCode, Codeforces, and CodeChef
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        &#x1F4F1; Full-stack developer with MERN/Next.js expertise
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        &#x1F9E0; Exploring AI/ML with TensorFlow and OpenAI integrations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        &#x1F9A5; Innovate3.0 National Hackathon Finalist - 
                        <a 
                          href="https://github.com/goyalkartik773/Innovate3.O-Final-" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 underline ml-1"
                        >
                          Palm-Swift-Sentinel
                        </a>
                      </p>
                    </li>
                  </ul>
                </motion.div>

                {/* Focus Areas Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Focus Areas</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                      Data Structures & Algorithms (C++)
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                      Full Stack Development (MERN/Next.js)
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                      Competitive Programming
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                      AI/ML Development
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
