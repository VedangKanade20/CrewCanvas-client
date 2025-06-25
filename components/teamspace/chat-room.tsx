"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Smile, Image, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ChatRoomProps {
  teamSpace: any
}

// Sample chat messages
const initialMessages = [
  {
    id: "msg-1",
    sender: { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
    content:
      "Hey team! I've just uploaded the latest design mockups to the canvas. Can everyone take a look and provide feedback?",
    timestamp: "10:30 AM",
    reactions: [{ emoji: "👍", count: 2 }],
  },
  {
    id: "msg-2",
    sender: { id: "user-3", name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40" },
    content: "Looking good! I especially like the new navigation layout. Much more intuitive.",
    timestamp: "10:35 AM",
    reactions: [],
  },
  {
    id: "msg-3",
    sender: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
    content: "Thanks for sharing. I'll review it this afternoon and add my comments directly on the canvas.",
    timestamp: "10:42 AM",
    reactions: [],
  },
  {
    id: "msg-4",
    sender: { id: "user-4", name: "Sarah Williams", avatar: "/placeholder.svg?height=40&width=40" },
    content: "Quick question - are we still planning to present this to the client on Friday?",
    timestamp: "11:15 AM",
    reactions: [],
  },
  {
    id: "msg-5",
    sender: { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
    content: "Yes, the presentation is still scheduled for Friday at 2 PM. I've added it to our shared calendar.",
    timestamp: "11:18 AM",
    reactions: [{ emoji: "👌", count: 3 }],
  },
]

export function ChatRoom({ teamSpace }: ChatRoomProps) {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      reactions: [],
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-semibold text-lg"># general</h2>
          <span className="text-sm text-muted-foreground ml-2">{teamSpace.members.length} members</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start group">
              <Avatar className="h-10 w-10 mr-3 mt-0.5">
                <AvatarImage src={message.sender.avatar} />
                <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{message.sender.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{message.timestamp}</span>
                </div>

                <p className="mt-1">{message.content}</p>

                {message.reactions.length > 0 && (
                  <div className="flex mt-2 gap-1">
                    {message.reactions.map((reaction, index) => (
                      <div key={index} className="flex items-center bg-muted rounded-full px-2 py-0.5 text-xs">
                        <span className="mr-1">{reaction.emoji}</span>
                        <span>{reaction.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add reaction</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>

          <div className="relative flex-1">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="pr-20"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                <Image className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
