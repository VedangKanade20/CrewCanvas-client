"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, color, delay = 0 }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:shadow-md transition-all duration-300"
    >
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${color} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20`}
      />

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
        <Icon className={`h-6 w-6 ${color.replace("bg-", "text-")}`} />
      </div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
