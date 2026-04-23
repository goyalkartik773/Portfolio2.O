"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bootLines = [
  { text: "> Initializing Kartik's portfolio...", delay: 0 },
  { text: "> Loading AI/ML expertise...", delay: 300 },
  { text: "> Activating full-stack capabilities...", delay: 600 },
  { text: "> Compiling 9+ projects...", delay: 900 },
  { text: "> Establishing competitive programming stats...", delay: 1200 },
  { text: "> Portfolio ready. Welcome!", delay: 1500 },
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [glitchActive, setGlitchActive] = useState(false)

  // Glitch effect
  const triggerGlitch = useCallback(() => {
    setGlitchActive(true)
    setTimeout(() => setGlitchActive(false), 150)
  }, [])

  useEffect(() => {
    // Progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.max(1, Math.floor((100 - prev) / 8))
        const newValue = prev + increment * Math.random()
        if (newValue >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 600)
          return 100
        }
        return newValue
      })
    }, 80)

    // Boot lines
    bootLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines((prev) => prev + 1), bootLines[i].delay)
    })

    // Random glitch
    const glitchInterval = setInterval(triggerGlitch, 800)

    const minLoadTime = setTimeout(() => setProgress(100), 2200)

    return () => {
      clearInterval(interval)
      clearInterval(glitchInterval)
      clearTimeout(minLoadTime)
    }
  }, [triggerGlitch])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)" }}
        >
          {/* Rainbow grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          />

          {/* Floating hex decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-500/[0.06] text-xs font-mono whitespace-nowrap"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${i % 2 === 0 ? 5 : 70}%`,
                }}
                animate={{ opacity: [0, 0.5, 0], y: [0, -20, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              >
                {`0x${Math.random().toString(16).substr(2, 8).toUpperCase()}`}
              </motion.div>
            ))}
          </div>

          {/* Rainbow glow orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(239,68,68,0.1) 50%, transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(16,185,129,0.08) 50%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative mb-8"
          >
            {/* Code brackets logo */}
            <div className="relative flex items-center gap-3">
              <motion.span
                className="text-4xl font-mono font-bold"
                animate={{ color: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &lt;
              </motion.span>
              <div className="text-center">
                <motion.div
                  className={`text-3xl font-bold tracking-tight ${glitchActive ? "text-red-400" : "text-white"
                    } transition-colors duration-75`}
                  style={
                    glitchActive
                      ? { textShadow: "2px 0 #ff0040, -2px 0 #00ff88", transform: "translateX(2px)" }
                      : { textShadow: "0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(59,130,246,0.3)" }
                  }
                >
                  KG
                </motion.div>
              </div>
              <motion.span
                className="text-4xl font-mono font-bold"
                animate={{ color: ["#ec4899", "#3b82f6", "#8b5cf6", "#ec4899"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                /&gt;
              </motion.span>
            </div>

            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-4 border border-blue-500/20 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <div className="text-xl font-medium text-white/90 mb-1">
              Kartik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Goel</span>
            </div>
            <div className="text-sm text-slate-400 font-mono">Full Stack Developer | AI/ML Engineer | Competitive Programmer</div>
          </motion.div>

          {/* Terminal boot text */}
          <div className="w-72 sm:w-80 mb-8 font-mono text-xs space-y-1">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${i === visibleLines - 1 && i === bootLines.length - 1
                    ? "text-emerald-400"
                    : "text-blue-400/60"
                  }`}
              >
                {line.text}
                {i === visibleLines - 1 && (
                  <motion.span
                    className="inline-block w-2 h-3 bg-blue-400 ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-72 sm:w-80">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30 backdrop-blur-sm">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #22c55e, #3b82f6)",
                  backgroundSize: "300% 100%",
                  boxShadow: "0 0 20px rgba(139,92,246,0.5)",
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${progress}%`,
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  width: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
