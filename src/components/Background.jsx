import { useEffect, useRef } from "react"
import { useTheme } from "../context/ThemeContext"

export default function Background() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()

    const points = []
    const COUNT = 80
    const DIST = 120

    for (let i = 0; i < COUNT; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const color =
        theme === "dark"
          ? "rgba(200,200,200,"
          : "rgba(80,80,80,"

      points.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = color + "0.8)"
        ctx.fill()
      })

      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const d = Math.sqrt(dx * dx + dy * dy)

          if (d < DIST) {
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.strokeStyle = color + (1 - d / DIST) + ")"
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
