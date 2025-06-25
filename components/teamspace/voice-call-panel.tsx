"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mic, MicOff, Volume2, VolumeX, Maximize2, Minimize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface VoiceCallPanelProps {
  teamSpace: any
  onClose: () => void
}

export function VoiceCallPanel({ teamSpace, onClose }: VoiceCallPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isDeafened, setIsDeafened] = useState(false)
  const [activeMembers, setActiveMembers] = useState([])
  const [volume, setVolume] = useState(80)

  useEffect(() => {
    // Simulate active members joining the call
    const onlineMembers = teamSpace.members.filter((member) => member.isOnline)

    // Randomly select some online members to join the call
    const randomMembers = onlineMembers.sort(() => 0.5 - Math.random()).slice(0, Math.min(3, onlineMembers.length))

    setActiveMembers([
      // Current user is always in the call
      {
        id: "user-1",
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        isSpeaking: false,
        isMuted: false,
      },
      ...randomMembers
        .filter((member) => member.id !== "user-1")
        .map((member) => ({
          ...member,
          isSpeaking: Math.random() > 0.7,
          isMuted: Math.random() > 0.8,
        })),
    ])

    // Simulate members speaking
    const interval = setInterval(() => {
      setActiveMembers((prev) =>
        prev.map((member) => ({
          ...member,
          isSpeaking: member.id === "user-1" ? false : Math.random() > 0.7 && !member.isMuted,
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [teamSpace.members])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(
        "fixed right-6 bottom-6 bg-card border border-border rounded-lg shadow-lg z-40 overflow-hidden transition-all duration-300",
        isExpanded ? "w-80 h-96" : "w-72 h-auto",
      )}
    >
      <div className="bg-primary/10 p-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className={`h-4 w-4 rounded-sm ${teamSpace.color} mr-2`}></div>
          <h3 className="font-medium text-sm">Voice Channel</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-3">
        <div className="space-y-3 mb-4">
          {activeMembers.map((member) => (
            <div
              key={member.id}
              className={cn(
                "flex items-center p-2 rounded-md transition-colors",
                member.isSpeaking ? "bg-primary/10" : "hover:bg-muted",
              )}
            >
              <div className="relative">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span
                  className={cn(
                    "absolute bottom-0 right-2 h-2.5 w-2.5 rounded-full border-2 border-background",
                    member.isSpeaking ? "bg-green-500" : "bg-gray-400",
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {member.id === "user-1" ? `${member.name} (You)` : member.name}
                </p>
              </div>
              {member.isMuted && <MicOff className="h-4 w-4 text-muted-foreground" />}
            </div>
          ))}
        </div>

        {isExpanded && (
          <div className="mb-4 px-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Volume</span>
              <span className="text-xs text-muted-foreground">{volume}%</span>
            </div>
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              step={1}
              className="my-2"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <Button
            variant={isMuted ? "destructive" : "outline"}
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
            className="flex-1 mr-2"
          >
            {isMuted ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
            {isMuted ? "Unmute" : "Mute"}
          </Button>

          <Button
            variant={isDeafened ? "destructive" : "outline"}
            size="sm"
            onClick={() => setIsDeafened(!isDeafened)}
            className="flex-1"
          >
            {isDeafened ? <VolumeX className="h-4 w-4 mr-2" /> : <Volume2 className="h-4 w-4 mr-2" />}
            {isDeafened ? "Undeafen" : "Deafen"}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
