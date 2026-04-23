"use client"

import { useEffect, useRef, useState } from 'react'

export default function TwinklingStars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear existing stars
    container.innerHTML = ''

    // Create twinkling stars - reduced count for mobile
    const starCount = isMobile ? 15 : 50
    const positions: Array<{x: number, y: number, size: string, delay: number}> = []

    // Generate random positions ensuring good distribution
    for (let i = 0; i < starCount; i++) {
      const size = ['star-small', 'star-medium', 'star-large'][Math.floor(Math.random() * 3)]
      positions.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        delay: Math.random() * 4
      })
    }

    // Create star elements
    positions.forEach((pos) => {
      const star = document.createElement('div')
      star.className = `star ${pos.size}`
      star.style.left = `${pos.x}%`
      star.style.top = `${pos.y}%`
      star.style.animationDelay = `${pos.delay}s`
      container.appendChild(star)
    })

    // Create shooting stars (occasional) - reduced frequency for mobile
    const createShootingStar = () => {
      const shootingStar = document.createElement('div')
      shootingStar.className = 'shooting-star'
      shootingStar.style.left = `${Math.random() * 50}%`
      shootingStar.style.top = `${Math.random() * 50}%`
      shootingStar.style.animationDelay = `${Math.random() * 8}s`
      container.appendChild(shootingStar)

      // Remove shooting star after animation
      setTimeout(() => {
        shootingStar.remove()
      }, 8000)
    }

    // Create shooting stars occasionally - less frequent on mobile
    const shootingInterval = setInterval(createShootingStar, isMobile ? 8000 : 3000)
    
    // Initial shooting star - delayed on mobile
    setTimeout(createShootingStar, isMobile ? 3000 : 1000)

    return () => {
      clearInterval(shootingInterval)
    }
  }, [isMobile])

  return (
    <div 
      ref={containerRef} 
      className="stars-container"
      aria-hidden="true"
    />
  )
}
