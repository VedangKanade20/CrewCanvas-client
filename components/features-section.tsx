"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, FileText, Users, PenTool, CheckSquare, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

// Updated features with more detailed descriptions
const features = [
  {
    icon: PenTool,
    title: "Collaborative Canvas",
    description:
      "Draw, sketch, and visualize ideas together in real-time with our Excalidraw-like canvas. Create diagrams, wireframes, and mind maps that update instantly as team members contribute.",
    color: "bg-cyan-500",
    details:
      "Our collaborative canvas supports multiple drawing tools, shapes, and text elements. Add sticky notes, create connections between ideas, and export your work in various formats. Perfect for brainstorming sessions and visual planning.",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description:
      "Create and organize notes collaboratively with Notion-like functionality and real-time editing. Build a knowledge base that grows with your team.",
    color: "bg-green-500",
    details:
      "Format your notes with rich text editing, embed images and files, and create nested pages to organize information. Use templates for common note types, and search across all your team's notes instantly.",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description:
      "Assign, track, and complete tasks with your team using our intuitive task management system. Set priorities, deadlines, and dependencies.",
    color: "bg-yellow-500",
    details:
      "View tasks in multiple formats including lists, boards, and calendars. Set up automated workflows, recurring tasks, and get notifications for upcoming deadlines. Track progress with visual dashboards and reports.",
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    description:
      "Communicate instantly with team members through integrated chat channels and direct messages. Keep conversations organized and searchable.",
    color: "bg-blue-500",
    details:
      "Create topic-based channels, share files directly in conversations, and use @mentions to get someone's attention. All messages are searchable and can be bookmarked for later reference.",
  },
  {
    icon: Users,
    title: "Team Spaces",
    description:
      "Create dedicated spaces for different teams and projects with customizable permissions. Keep work organized and focused.",
    color: "bg-orange-500",
    details:
      "Control who can view, edit, or manage content in each space. Create templates for new projects, and easily move or copy content between spaces. Get insights into team activity and collaboration patterns.",
  },
  {
    icon: Mic,
    title: "Voice Calling",
    description:
      "Jump into quick voice calls with teammates without leaving your workflow. Discuss ideas in real-time while collaborating on documents.",
    color: "bg-red-500",
    details:
      "Start voice calls directly from any canvas, note, or chat. Share your screen to walk through ideas, and record important discussions for team members who couldn't attend.",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="features" className="py-24 bg-background text-foreground">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Everything you need to collaborate
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            CollabSpace combines the best collaboration tools in one seamless platform, helping your team work together
            more effectively.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} bg-opacity-20`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color.replace("bg-", "text-")}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
                <p className="text-foreground/80">{feature.details}</p>
                <Button variant="outline" className="mt-4">
                  Learn more
                </Button>
              </div>

              <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-border shadow-lg">
                <div className={`aspect-video bg-card relative overflow-hidden`}>
                  <div className={`absolute inset-0 ${feature.color} opacity-5`}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-card rounded-lg border border-border p-4 flex flex-col">
                      <div className="h-6 flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 h-4 w-40 bg-muted-foreground/20 rounded-full"></div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <feature.icon className={`h-24 w-24 ${feature.color.replace("bg-", "text-")} opacity-20`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
