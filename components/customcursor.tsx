'use client'

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCursorContext } from "./cursorcontext"

export default function Cursor() {
  const { variant, animateCursor } = useCursorContext()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const cursorX = useSpring(x, { stiffness: 500, damping: 30 })
  const cursorY = useSpring(y, { stiffness: 500, damping: 30 })

  const variants = {
    cursorEnter: {
      border: '1px solid #84cc16',
      boxShadow: '0 0 4px #84cc16',
      scale: 1.25,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      transition: { duration: 0.2 },
    },

    cursorLeave: {
      border: '2px solid transparent',
      scale: 1,
      backgroundColor: '#84cc16',
      transition: { duration: 0.2 },
    },
  }

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      x.set(e.clientX - 12)
      y.set(e.clientY - 12)

      const target = e.target as HTMLElement

      const clickable = target.closest(
        'a, button, input, textarea, [role="button"], [data-cursor]'
      )

      if (clickable) {
        animateCursor('cursorEnter')
      } else {
        animateCursor('cursorLeave')
      }
    }

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [animateCursor, x, y])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full z-100"
      variants={variants}
      animate={variant}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  )
}