"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { TeamSpaceHeader } from "@/components/teamspace/teamspace-header"
import { TeamSpaceSidebar } from "@/components/teamspace/teamspace-sidebar"
import { VoiceCallPanel } from "@/components/teamspace/voice-call-panel"
import { ChatRoom } from "@/components/teamspace/chat-room"
import { Canvas } from "@/components/teamspace/canvas"
import { TaskBoard } from "@/components/teamspace/task-board"
import { Notes } from "@/components/teamspace/notes"

// Sample team space data
const teamSpaces = {
  "team-1": {
    id: "team-1",
    name: "Product Design",
    description: "UI/UX design projects and resources",
    members: [
      { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-3", name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
      { id: "user-4", name: "Sarah Williams", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-5", name: "Michael Brown", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
    ],
    color: "bg-blue-500",
  },
  "team-2": {
    id: "team-2",
    name: "Marketing Campaign",
    description: "Q2 marketing strategy and assets",
    members: [
      { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-6", name: "Emily Davis", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-7", name: "David Wilson", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
    ],
    color: "bg-purple-500",
  },
  "team-3": {
    id: "team-3",
    name: "Engineering Sprint",
    description: "Current sprint tasks and documentation",
    members: [
      { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-3", name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
      { id: "user-8", name: "Ryan Lee", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-9", name: "Olivia Martin", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
    ],
    color: "bg-green-500",
  },
  "team-4": {
    id: "team-4",
    name: "Research Project",
    description: "Market research and competitor analysis",
    members: [
      { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
      { id: "user-10", name: "Daniel Taylor", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
    ],
    color: "bg-orange-500",
  },
}

export default function TeamSpacePage() {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const [activeSection, setActiveSection] = useState("chat")
  const [isVoiceCallActive, setIsVoiceCallActive] = useState(false)
  const [teamSpace, setTeamSpace] = useState(null)

  useEffect(() => {
    // Get team space data
    const space = teamSpaces[id] || {
      id: id,
      name: "New Team Space",
      description: "A collaborative workspace",
      members: [{ id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isOnline: true }],
      color: "bg-blue-500",
    }

    setTeamSpace(space)
  }, [id])

  if (!teamSpace) {
    return <div className="flex items-center justify-center h-screen">Loading team space...</div>
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "chat":
        return <ChatRoom teamSpace={teamSpace} />
      case "canvas":
        return <Canvas teamSpace={teamSpace} />
      case "tasks":
        return <TaskBoard teamSpace={teamSpace} />
      case "notes":
        return <Notes teamSpace={teamSpace} />
      default:
        return <ChatRoom teamSpace={teamSpace} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TeamSpaceHeader
        teamSpace={teamSpace}
        onVoiceCallToggle={() => setIsVoiceCallActive(!isVoiceCallActive)}
        isVoiceCallActive={isVoiceCallActive}
      />

      <div className="flex">
        <TeamSpaceSidebar teamSpace={teamSpace} activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="flex-1 p-6 pt-24 md:pl-64">
          {isVoiceCallActive && <VoiceCallPanel teamSpace={teamSpace} onClose={() => setIsVoiceCallActive(false)} />}

          {renderActiveSection()}
        </main>
      </div>
    </div>
  )
}
