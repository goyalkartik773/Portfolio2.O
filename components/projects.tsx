"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  image: string;
  category: string[];
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  apkUrl?: string;
  previewUrl?: string;
  devfolioUrl?: string;
}

const projectCategories = ["All", "AI/ML", "GenAI", "Web"];

const projects: Project[] = [
  {
    image: "/images/eathub.png",
    category: ["Web"],
    title: "EatHub - Food Delivery Platform",
    description:
      "A modern full-stack food delivery platform connecting hungry customers with their favorite restaurants. Features real-time order tracking, multi-role authentication, and a developer-friendly architecture with Socket.io integration.",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Firebase"],
    githubUrl: "https://github.com/goyalkartik773/eathub",
    liveUrl: "https://eathub-swart.vercel.app",
  },
  {
    image: "/images/echomind.png",
    category: ["AI/ML", "Web"],
    title: "EchoMind - AI Voice Assistant",
    description:
      "A full-stack voice-enabled virtual assistant powered by Google Gemini AI. Features real-time speech recognition, natural language processing, and intelligent command execution with personalized avatars and wake-word detection.",
    tags: ["React.js", "Node.js", "Google Gemini AI", "Web Speech API", "MongoDB"],
    githubUrl: "https://github.com/goyalkartik773/EchoMind",
    liveUrl: "https://virtualechomind.netlify.app",
  },
  {
    image: "/images/jiitbot.png",
    category: ["GenAI", "Web"],
    title: "JIIT Assistant - Institutional AI Platform",
    description:
      "A comprehensive AI-powered web application for JIIT students featuring intelligent chatbot, project synopsis generator, social media hub, and live portal with real-time campus updates and ML-powered insights.",
    tags: ["Python", "Streamlit", "FAISS", "Google Gemini AI", "scikit-learn"],
    githubUrl: "https://github.com/goyalkartik773/JiitBot",
    liveUrl: "https://jiitbot-assistant.streamlit.app",
  },
  {
    image: "/images/sortifier.png",
    category: ["Web"],
    title: "Sortifier - Algorithm Visualizer",
    description:
      "A professional C++ desktop application visualizing 14 sorting algorithms with real-time statistics, gradient graphics, and pitch-based audio feedback. Features stunning visual effects and educational value for understanding algorithm complexity.",
    tags: ["C++", "SFML", "Data Visualization", "Algorithms", "Audio Programming"],
    githubUrl: "https://github.com/goyalkartik773/SORT_VISUALIZER",
    liveUrl: "https://github.com/goyalkartik773/SORT_VISUALIZER/releases/tag/sortifier-v1.0",
  },
  {
    image: "/images/deeppacket.png",
    category: ["Web"],
    title: "NetSpector - Network Intelligence System",
    description:
      "Advanced network intelligence platform that inspects and analyzes network traffic in real-time. Features TLS SNI extraction, application identification, flow-based traffic control, and multi-threaded packet processing architecture.",
    tags: ["C++", "Network Intelligence", "Traffic Analysis", "Cybersecurity", "TLS/SSL", "PCAP"],
    githubUrl: "https://github.com/goyalkartik773/DPI-Engine",
  },
  {
    image: "/images/VibeTube.png",
    category: ["Web"],
    title: "VibeTube - Video Streaming Platform",
    description:
      "A feature-rich video streaming platform built with MERN stack, JWT authentication, and Firebase Storage. Features video uploads, channels, playlists, comments, likes, and YouTube studio for content management.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Firebase Storage", "JWT"],
    githubUrl: "https://github.com/goyalkartik773/Youtube-Clone-MERN",
  },
  {
    image: "/images/medincine.png",
    category: ["AI/ML"],
    title: "Medicine Recommendation System",
    description:
      "An intelligent ML-powered system designed to assist healthcare professionals in selecting appropriate medications based on patient history, symptoms, and drug interactions. Features predictive models and personalized recommendations.",
    tags: ["Machine Learning", "Healthcare AI", "Data Processing", "Predictive Analytics", "Medical ML"],
    githubUrl: "https://github.com/goyalkartik773/Medicine-Recommendation-System",
  },
  {
    image: "/images/metroroute.png",
    category: ["Web"],
    title: "Rapid Metro Route Finder",
    description:
      "Advanced DSA project implementing multiple graph algorithms to find optimal metro routes. Features Dijkstra, Floyd-Warshall, BFS, and backtracking algorithms with real-time visualization using SFML for urban mobility solutions.",
    tags: ["C++", "Data Structures", "Graph Algorithms", "SFML", "Dijkstra", "Visualization"],
    githubUrl: "https://github.com/goyalkartik773/Rapid-Metro-Route-Finder",
  },
  {
    image: "/images/razorpay.jpeg",
    category: ["Web"],
    title: "Razorpay Clone - Payment Gateway",
    description:
      "Modern payment gateway frontend clone with glassmorphism design, smooth animations, and complete responsive layout. Features hero section, payment suite, business banking, testimonials, and mobile-friendly interface using Tailwind CSS.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design", "Glassmorphism"],
    githubUrl: "https://github.com/goyalkartik773/Razorpay-Clone",
    liveUrl: "https://razorpay-clone-demo.vercel.app",
  },
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
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-600">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'top center' }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
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
