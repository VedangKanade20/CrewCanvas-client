"use client"
import { motion } from "framer-motion"
import { MessageSquare, FileText, Users, PenTool, CheckSquare, Mic } from "lucide-react"

const icons = [
  { Icon: MessageSquare, color: "text-blue-500", size: 24 },
  { Icon: FileText, color: "text-green-500", size: 26 },
  { Icon: Users, color: "text-orange-500", size: 30 },
  { Icon: PenTool, color: "text-cyan-500", size: 28 },
  { Icon: CheckSquare, color: "text-yellow-500", size: 26 },
  { Icon: Mic, color: "text-red-500", size: 24 },
]

export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <FloatingIcon key={index} icon={icon} index={index} />
      ))}
    </div>
  )
}

function FloatingIcon({ icon, index }) {
  const { Icon, color, size } = icon
  const initialX = Math.random() * 100
  const initialY = Math.random() * 40 // Keep icons in the top portion of the screen

  const floatAnimation = {
    x: [
      initialX - 10 - index * 5,
      initialX + 10 + index * 3,
      initialX - 5 - index * 2,
      initialX + 5 + index * 4,
      initialX - 10 - index * 5,
    ],
    y: [
      initialY - 5 - index * 2,
      initialY + 5 + index * 3,
      initialY - 8 - index * 1,
      initialY + 3 + index * 2,
      initialY - 5 - index * 2,
    ],
    rotate: [0, 10, -5, 8, 0],
    scale: [1, 1.05, 0.95, 1.02, 1],
  }

  return (
    <motion.div
      className={`absolute ${color} drop-shadow-lg dark:drop-shadow-[0_0_0.3rem_#ffffff70]`}
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
      }}
      animate={floatAnimation}
      transition={{
        duration: 20 + index * 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <Icon size={size} className="opacity-80 dark:opacity-90" />
    </motion.div>
  )
}
