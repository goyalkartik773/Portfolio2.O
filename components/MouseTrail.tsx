"use client"

import { useEffect, useRef, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
  life: number
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const particleIdRef = useRef(0)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Rainbow colors
  const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3', // Violet
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Only create particles if mouse moved significantly
      const dx = clientX - lastMousePos.current.x
      const dy = clientY - lastMousePos.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance > 8) { // Only create particle every 8px of movement for better performance
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: clientX,
          y: clientY,
          color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
          size: Math.random() * 3 + 1, // Smaller particles
          life: 1.0,
        }
        
        setParticles(prev => [...prev, newParticle].slice(-10)) // Keep only last 10 particles
        lastMousePos.current = { x: clientX, y: clientY }
      }
    }

    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            life: particle.life - 0.02,
            y: particle.y - 0.5, // Slight upward float
            size: particle.size * 0.98, // Gradually shrink
          }))
          .filter(particle => particle.life > 0)
      )
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Disable mouse trail on mobile for performance
  if (isMobile) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            willChange: 'opacity, transform',
          }}
        />
      ))}
    </div>
  )
}
