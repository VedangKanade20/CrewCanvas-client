"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, PenTool, CheckSquare, FileText, Settings, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamSpaceSidebarProps {
  teamSpace: any
  activeSection: string
  onSectionChange: (section: string) => void
}

export function TeamSpaceSidebar({ teamSpace, activeSection, onSectionChange }: TeamSpaceSidebarProps) {
  const [showMembers, setShowMembers] = useState(true)

  const sections = [
    { id: "chat", name: "Chat", icon: MessageSquare },
    { id: "canvas", name: "Canvas", icon: PenTool },
    { id: "tasks", name: "Tasks", icon: CheckSquare },
    { id: "notes", name: "Notes", icon: FileText },
  ]

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-border bg-card hidden md:block z-30">
      <ScrollArea className="h-full py-6 px-3">
        <div className="space-y-6">
          {/* Sections */}
          <div>
            <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">Sections</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => onSectionChange(section.id)}
                >
                  <section.icon className="h-4 w-4 mr-3" />
                  {section.name}
                </Button>
              ))}
            </nav>
          </div>

          {/* Members */}
          <div>
            <div
              className="px-4 flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setShowMembers(!showMembers)}
            >
              <h3 className="text-sm font-medium text-muted-foreground">Members</h3>
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform ${showMembers ? "rotate-90" : ""}`}
              />
            </div>

            {showMembers && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1 px-2"
              >
                {teamSpace.members.map((member) => (
                  <div key={member.id} className="flex items-center p-2 rounded-md hover:bg-muted transition-colors">
                    <div className="relative">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          "absolute bottom-0 right-2 h-2.5 w-2.5 rounded-full border-2 border-background",
                          member.isOnline ? "bg-green-500" : "bg-gray-400",
                        )}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.isOnline ? "Online" : "Offline"}</p>
                    </div>
                  </div>
                ))}

                <Button variant="ghost" size="sm" className="w-full justify-start mt-2">
                  <Plus className="h-4 w-4 mr-2" />
                  Invite Members
                </Button>
              </motion.div>
            )}
          </div>

          {/* Settings */}
          <div className="pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-3" />
              Team Space Settings
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
