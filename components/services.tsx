"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Swords, Code, Smartphone } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI/ML & Generative AI",
    description:
      "Building intelligent systems with deep learning, NLP, and computer vision — from RAG pipelines to end-to-end ML deployments.",
    features: [
      "RAG Pipelines & LLM Integration",
      "Deep Learning (PyTorch, TensorFlow)",
      "Computer Vision & NLP",
      "ML Model Deployment (Azure, Docker)",
    ],
    gradient: "from-violet-500 to-purple-600",
    hoverGradient: "group-hover:from-violet-600 group-hover:to-purple-700",
  },
  {
    icon: Swords,
    title: "Competitive Programming",
    description:
      "Solving complex algorithmic challenges with optimized C++ solutions — active on Codeforces and CodeChef.",
    features: [
      "Data Structures & Algorithms",
      "Optimized C++ Solutions",
      "Contest Problem Solving",
      "Complexity Analysis & Optimization",
    ],
    gradient: "from-amber-500 to-orange-500",
    hoverGradient: "group-hover:from-amber-600 group-hover:to-orange-600",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Crafting high-performance web applications with modern frameworks, REST APIs, and real-time features.",
    features: [
      "React / Next.js Frontend",
      "Node.js, Flask & FastAPI Backends",
      "Database Design (SQL & NoSQL)",
      "WebSocket & Real-time Systems",
    ],
    gradient: "from-cyan-500 to-blue-500",
    hoverGradient: "group-hover:from-cyan-600 group-hover:to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building scalable cross-platform mobile apps with Flutter, real-time data pipelines, and native-feel UIs.",
    features: [
      "Flutter / Dart Development",
      "Firebase & API Integration",
      "Real-time Updates & Notifications",
      "Cross-platform UI Engineering",
    ],
    gradient: "from-emerald-500 to-teal-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:to-teal-600",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            My <span className="text-blue-500 dark:text-blue-400">Services</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">What I Do</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From AI-powered solutions to competitive programming and full-stack engineering — I build things that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-700/40 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} ${service.hoverGradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div
                  className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40`}
                />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2.5 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + featureIndex * 0.08 + 0.4 }}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Ready to bring your ideas to life? Let&apos;s discuss your project.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
