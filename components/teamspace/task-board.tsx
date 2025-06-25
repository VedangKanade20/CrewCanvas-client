"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, MoreHorizontal, Calendar, CheckCircle2, Circle, AlertCircle, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface TaskBoardProps {
  teamSpace: any
}

// Sample tasks data
const initialColumns = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Research competitor products",
        description: "Analyze features and pricing of main competitors",
        assignee: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-15",
        priority: "medium",
        labels: ["research"],
      },
      {
        id: "task-2",
        title: "Create wireframes for dashboard",
        description: "Design initial wireframes for the main dashboard view",
        assignee: { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-18",
        priority: "high",
        labels: ["design", "ui"],
      },
      {
        id: "task-3",
        title: "Set up analytics tracking",
        description: "Implement Google Analytics and event tracking",
        assignee: null,
        dueDate: "2023-04-20",
        priority: "low",
        labels: ["dev"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-4",
        title: "Develop user authentication flow",
        description: "Implement login, registration, and password reset",
        assignee: { id: "user-3", name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-14",
        priority: "high",
        labels: ["dev", "auth"],
      },
      {
        id: "task-5",
        title: "Design system documentation",
        description: "Create documentation for our component library",
        assignee: { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-16",
        priority: "medium",
        labels: ["design", "docs"],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "task-6",
        title: "Review homepage redesign",
        description: "Provide feedback on the new homepage design",
        assignee: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-12",
        priority: "medium",
        labels: ["design", "review"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-7",
        title: "Project kickoff meeting",
        description: "Initial team meeting to discuss project goals and timeline",
        assignee: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-10",
        priority: "high",
        labels: ["meeting"],
      },
      {
        id: "task-8",
        title: "User research interviews",
        description: "Conduct interviews with 5 potential users",
        assignee: { id: "user-4", name: "Sarah Williams", avatar: "/placeholder.svg?height=40&width=40" },
        dueDate: "2023-04-08",
        priority: "high",
        labels: ["research", "ux"],
      },
    ],
  },
]

// Label colors
const labelColors = {
  design: "bg-blue-500",
  dev: "bg-green-500",
  research: "bg-purple-500",
  ui: "bg-cyan-500",
  ux: "bg-indigo-500",
  meeting: "bg-yellow-500",
  docs: "bg-orange-500",
  review: "bg-pink-500",
  auth: "bg-red-500",
}

// Priority icons
const priorityIcons = {
  low: { icon: Circle, className: "text-blue-500" },
  medium: { icon: CheckCircle2, className: "text-yellow-500" },
  high: { icon: AlertCircle, className: "text-red-500" },
}

export function TaskBoard({ teamSpace }: TaskBoardProps) {
  const [columns, setColumns] = useState(initialColumns)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter tasks based on search query
  const filteredColumns = columns.map((column) => ({
    ...column,
    tasks: column.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase())),
    ),
  }))

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Task Board</h2>

          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search tasks..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>

            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-4">
        <div className="flex gap-4 h-full">
          {filteredColumns.map((column) => (
            <div
              key={column.id}
              className="flex-shrink-0 w-80 flex flex-col bg-muted/50 rounded-lg border border-border overflow-hidden"
            >
              <div className="p-3 border-b border-border bg-muted flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="font-medium">{column.title}</h3>
                  <Badge variant="outline" className="ml-2">
                    {column.tasks.length}
                  </Badge>
                </div>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-3">
                <div className="space-y-3">
                  {column.tasks.map((task) => {
                    const PriorityIcon = priorityIcons[task.priority].icon

                    return (
                      <motion.div
                        key={task.id}
                        whileHover={{ y: -2 }}
                        className="bg-card rounded-md border border-border p-3 shadow-sm cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">{task.title}</h4>
                          <PriorityIcon className={cn("h-4 w-4", priorityIcons[task.priority].className)} />
                        </div>

                        {task.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{task.description}</p>
                        )}

                        <div className="flex flex-wrap gap-1 mb-3">
                          {task.labels.map((label) => (
                            <span
                              key={label}
                              className={cn(
                                "px-2 py-0.5 rounded-full text-white text-xs",
                                labelColors[label] || "bg-gray-500",
                              )}
                            >
                              {label}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center">
                            {task.assignee ? (
                              <Avatar className="h-6 w-6 mr-1">
                                <AvatarImage src={task.assignee.avatar} />
                                <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            ) : (
                              <Avatar className="h-6 w-6 mr-1 bg-muted">
                                <AvatarFallback>?</AvatarFallback>
                              </Avatar>
                            )}
                            <span>{task.assignee ? task.assignee.name : "Unassigned"}</span>
                          </div>

                          {task.dueDate && (
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}

                  {column.tasks.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No tasks found</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          ))}

          <div className="flex-shrink-0 w-80 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
            <Button variant="ghost">
              <Plus className="h-5 w-5 mr-2" />
              Add Column
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
