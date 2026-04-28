"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const socialLinks = [
  { href: "https://www.linkedin.com/in/kartik-goel-a95b2630b/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u//", icon: SiLeetcode, label: "LeetCode" },
  { href: "https://codeforces.com/profile/", icon: SiCodeforces, label: "Codeforces" },
  { href: "https://www.codechef.com/users/", icon: SiCodechef, label: "CodeChef" },
];


export default function Hero() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24 pb-16 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-5">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400"
              >
                👋 Hi, I'm
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
              >
KARTIK GOEL
              </motion.h1>

              {/* Typing animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium h-8"
              >
                <Typewriter
                  words={[
                    "FULL STACK DEVELOPER 💻",
                    "SOFTWARE DEVELOPER 🛠️",
                    "ML/AI Developer (in progress) 🤖",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              >
Passionate Full Stack Developer with a strong foundation in web development and growing expertise in ML/AI. I love solving complex problems and turning ideas into reality through code.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={18} />
                Contact
              </motion.button>
              <motion.a
                href="/cv.pdf"
                download="CV.pdf"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-7 py-3.5 rounded-xl font-medium transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex justify-center lg:justify-start space-x-5 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Kartik's ${social.label} profile`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-full bg-white dark:bg-slate-900 shadow-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-blue-500 dark:text-blue-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Modern Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="justify-self-center relative"
          >
            {/* Animated Glow */}
            <motion.div
              className="absolute -inset-10 z-0 rounded-full blur-3xl opacity-60 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 60% 40%, #3b82f6 0%, #6366f1 50%, transparent 100%)",
                  "radial-gradient(circle at 60% 40%, #8b5cf6 0%, #ec4899 50%, transparent 100%)",
                  "radial-gradient(circle at 60% 40%, #3b82f6 0%, #6366f1 50%, transparent 100%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Glassmorphism Blob */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] z-10"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 600 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="modernBlob">
                    <path d="M420,60Q480,120,520,210Q560,300,500,390Q440,480,340,540Q240,600,150,540Q60,480,80,370Q100,260,120,150Q140,40,260,40Q380,40,420,60Z" />
                  </clipPath>
                  <pattern
                    id="dots"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" fill="#3b82f6" opacity="0.15" />
                  </pattern>
                </defs>

                <g clipPath="url(#modernBlob)">
                  <rect width="600" height="700" fill="url(#dots)" />
                  <rect width="600" height="700" fill="rgba(59,130,246,0.08)" />
                  <image
                    href="/images/myImg.png"
                    x="0"
                    y="0"
                    width="600"
                    height="700"
                    style={{
                      filter:
                        "drop-shadow(0 8px 32px rgba(59,130,246,0.25))",
                    }}
                  />
                </g>

                <path
                  d="M420,60Q480,120,520,210Q560,300,500,390Q440,480,340,540Q240,600,150,540Q60,480,80,370Q100,260,120,150Q140,40,260,40Q380,40,420,60Z"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  opacity="0.25"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
