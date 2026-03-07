"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projectCategories = ["All", "AI/ML", "Web", "App"];

const projects = [
  {
    image: "/images/tt.png",
    category: ["App"],
    title: "StudySync - TimeTable App",
    description:
      "A visually appealing Flutter timetable and calendar app that helps students efficiently track their class schedules and college events.",
    tags: ["Flutter", "MongoDB", "Express", "Cors"],
    githubUrl: "https://github.com/AmanVerma1067/StudySync",
    apkUrl:
      "https://github.com/AmanVerma1067/StudySync/releases/tag/v3.0.0",
  },
  {
    image: "/images/chess.png",
    category: ["AI/ML", "Web"],
    title: "Chessify AI",
    description:
      "Full-featured chess app with AI opponent (Minimax + Stockfish) and real-time PvP multiplayer via WebSockets. Features live chat, spectator mode, game timers, and drag-and-drop interaction.",
    tags: [
      "Next.js",
      "TypeScript",
      "Flask",
      "Stockfish",
      "Socket.IO",
      "WebSocket",
    ],
    githubUrl: "https://github.com/AmanVerma1067/Chessify-WebApp",
    liveUrl: "https://chessify.aman1067.xyz/",
    previewUrl: "https://www.youtube.com/watch?v=kzqac5qWbYQ",
  },
  {
    image: "/images/yatri.jpeg",
    category: ["App", "AI/ML"],
    title: "SahYatri - Smart Bus Assistant",
    description:
      "An intelligent public transport analytics platform offering real-time bus occupancy tracking and AI-powered alerts.",
    tags: ["Flutter", "Next.js", "PostgreSQL", "OpenCV"],
    githubUrl: "https://github.com/AmanVerma1067/SahYatri",
    previewUrl:
      "https://www.youtube.com/watch?v=ESh_J48Pc3w&feature=youtu.be",
    devfolioUrl: "https://devfolio.co/projects/sahyatri-3ca7",
  },
  {
    image: "/images/neuro.png",
    category: ["AI/ML"],
    title: "NeuroMath",
    description:
      "AI-powered handwritten math solver using a PyTorch CNN that recognizes digits and operators drawn on a digital canvas, achieving 98.6% validation accuracy.",
    tags: ["PyTorch", "Flask", "OpenCV", "Deep Learning", "Canvas API"],
    githubUrl: "https://github.com/AmanVerma1067/NeuroMath",
  },
  {
    image: "/images/nva.png",
    category: ["AI/ML", "Web"],
    title: "Nutri-Vision AI",
    description:
      "AI-powered nutrition tracker with food image recognition, voice-to-text logging, health-aware alerts, and goal-based dietary recommendations. Built with Next.js & Supabase.",
    tags: ["Next.js", "Supabase", "AI", "Voice Recognition", "Health Tech"],
    githubUrl: "https://github.com/AmanVerma1067/nva",
  },
  {
    image: "/images/drive.png",
    category: ["AI/ML"],
    title: "DriveSure",
    description:
      "Pay-As-You-Drive insurance risk scoring system that evaluates real-time telematics data to predict crash/claim risk and generate a 0–100 safety score via REST API.",
    tags: ["Python", "Machine Learning", "REST API", "Telematics", "Risk Modeling"],
    githubUrl: "https://github.com/AmanVerma1067/DriveSureModel",
  },
  {
    image: "/images/ml.png",
    category: ["AI/ML"],
    title: "Student Performance ML",
    description:
      "End-to-end ML pipeline predicting student math scores based on demographic and academic features. Deployed on Azure with Docker, CI/CD, and a Flask web frontend.",
    tags: ["Python", "Flask", "Docker", "Azure", "Scikit-learn", "CI/CD"],
    githubUrl: "https://github.com/AmanVerma1067/Student_Performance-ML-Azure-Deployment",
    liveUrl: "https://student-ml-app.onrender.com",
  },
  {
    image: "/images/nvat.png",
    category: ["AI/ML"],
    title: "Nutri-Vision Text Analyzer",
    description:
      "NLP system that transforms natural food descriptions into detailed nutritional data using spaCy NER, USDA API integration, and a FastAPI + Streamlit interface.",
    tags: ["FastAPI", "spaCy", "NLP", "Streamlit", "USDA API"],
    githubUrl: "https://github.com/Nutri-Vision/Model_Text-Voice",
  },
  {
    image: "/images/interview.png",
    category: ["AI/ML", "Web"],
    title: "AI-Driven Interview System",
    description:
      "Full-stack AI interview platform featuring automated PDF resume parsing, AI-generated technical questions via Hugging Face, and a secure Docker-based code execution sandbox with proctoring and performance analytics.",
    tags: ["React", "FastAPI", "Docker", "Hugging Face", "PostgreSQL", "Microservices"],
    githubUrl: "https://github.com/Minor-2-0/Recruitai",
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="bg-slate-50 dark:bg-slate-800 py-20 transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            My <span className="text-blue-500 dark:text-blue-400">Work</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-8">
            Recent Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${activeCategory === category
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200/60 dark:border-slate-600/40"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-700/70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/40 dark:border-slate-600/30"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-600">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {Array.isArray(project.category)
                      ? project.category.join(", ")
                      : project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 items-center border-t border-slate-100 dark:border-slate-600/50">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">APK</span>
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Preview</span>
                    </a>
                  )}
                  {project.devfolioUrl && (
                    <a
                      href={project.devfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Devfolio</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
