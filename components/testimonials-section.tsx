"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

// Updated testimonials from student teams
const testimonials = [
  {
    name: "Alex Chen",
    role: "Computer Science Student, Stanford University",
    content:
      "CollabSpace helped our student project team collaborate across different time zones. The real-time canvas and task management features made our final project a success!",
    rating: 5,
  },
  {
    name: "Maya Patel",
    role: "Design Student, Rhode Island School of Design",
    content:
      "As design students, we needed a tool that could handle our creative process. The collaborative canvas in CollabSpace is perfect for brainstorming and iterating on ideas.",
    rating: 5,
  },
  {
    name: "Jamal Washington",
    role: "Engineering Student, MIT",
    content:
      "The voice calling feature integrated with our project workspace made remote collaboration feel natural during our robotics competition prep. It's like we're all in the same lab.",
    rating: 4,
  },
  {
    name: "Sofia Rodriguez",
    role: "Business Student, NYU Stern",
    content:
      "Our case competition team tried many collaboration tools, but CollabSpace is the first one that truly combines everything we need in one platform. It helped us win first place!",
    rating: 5,
  },
]

export function TestimonialsSection() {
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
    <section id="testimonials" className="py-24 bg-background">
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
            Student Testimonials
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Empowering student collaboration
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            See how student teams are using CollabSpace to collaborate on projects, competitions, and coursework.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground/90">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
