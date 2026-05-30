import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = mouseX - 4 + 'px'
        dot.style.top = mouseY - 4 + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX - 17 + 'px'
        ring.style.top = ringY - 17 + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onMouseEnterBtn = () => {
      if (ring) ring.style.transform = 'scale(1.8)'
      if (dot) dot.style.transform = 'scale(0.5)'
    }
    const onMouseLeaveBtn = () => {
      if (ring) ring.style.transform = 'scale(1)'
      if (dot) dot.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterBtn)
      el.addEventListener('mouseleave', onMouseLeaveBtn)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
