"use client"

import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [performanceData, setPerformanceData] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    // Detect mobile device
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)

    // Monitor performance metrics
    if ('performance' in window && 'getEntriesByType' in performance) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            setPerformanceData(prev => ({
              ...prev,
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart
            }))
          }
        })
      })

      try {
        observer.observe({ entryTypes: ['navigation'] })
      } catch (e) {
        console.log('Performance observer not supported')
      }

      return () => {
        observer.disconnect()
      }
    }

    // First Contentful Paint
    if ('performance' in window && 'getEntriesByType' in performance) {
      const paintEntries = performance.getEntriesByType('paint')
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
      if (fcp) {
        setPerformanceData(prev => ({
          ...prev,
          firstContentfulPaint: fcp.startTime
        }))
      }
    }
  }, [])

  // Log performance data in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Data:', performanceData)
      console.log('Is Mobile:', isMobile)
    }
  }, [performanceData, isMobile])

  // Don't render anything (performance monitoring is console-only)
  return null
}
