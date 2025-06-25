"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Filter, Grid, List, MoreHorizontal, Star, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NotesProps {
  teamSpace: any
}

// Sample notes data
const initialNotes = [
  {
    id: "note-1",
    title: "Project Requirements",
    content:
      "# Project Requirements\n\n- User authentication\n- Dashboard with analytics\n- Team collaboration features\n- File sharing capabilities\n- Real-time notifications",
    createdBy: { id: "user-1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
    createdAt: "2023-04-05T10:30:00Z",
    updatedAt: "2023-04-10T14:15:00Z",
    isStarred: true,
    tags: ["requirements", "planning"],
  },
  {
    id: "note-2",
    title: "Design System Guidelines",
    content:
      "# Design System\n\n## Colors\n- Primary: #6366F1\n- Secondary: #8B5CF6\n- Accent: #EC4899\n\n## Typography\n- Headings: Inter, sans-serif\n- Body: Inter, sans-serif\n\n## Components\n- Buttons\n- Cards\n- Forms\n- Navigation",
    createdBy: { id: "user-2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
    createdAt: "2023-04-06T09:45:00Z",
    updatedAt: "2023-04-11T11:20:00Z",
    isStarred: false,
    tags: ["design", "ui"],
  },
  {
    id: "note-3",
    title: "Meeting Notes: Kickoff",
    content:
      "# Kickoff Meeting\n\n**Date:** April 3, 2023\n**Attendees:** John, Jane, Alex, Sarah\n\n## Agenda\n1. Project overview\n2. Timeline discussion\n3. Role assignments\n4. Next steps\n\n## Action Items\n- John: Set up project repository\n- Jane: Create initial wireframes\n- Alex: Research API options\n- Sarah: Prepare user research plan",
    createdBy: { id: "user-3", name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40" },
    createdAt: "2023-04-03T15:00:00Z",
    updatedAt: "2023-04-03T16:30:00Z",
    isStarred: true,
    tags: ["meeting", "planning"],
  },
  {
    id: "note-4",
    title: "User Research Findings",
    content:
      "# User Research Findings\n\n## Key Insights\n1. Users struggle with the current navigation\n2. Search functionality is highly valued\n3. Mobile experience needs improvement\n4. Collaboration features are essential\n\n## Recommendations\n- Simplify navigation structure\n- Enhance search capabilities\n- Redesign mobile interface\n- Add real-time collaboration tools",
    createdBy: { id: "user-4", name: "Sarah Williams", avatar: "/placeholder.svg?height=40&width=40" },
    createdAt: "2023-04-08T13:15:00Z",
    updatedAt: "2023-04-09T10:45:00Z",
    isStarred: false,
    tags: ["research", "ux"],
  },
]

export function Notes({ teamSpace }: NotesProps) {
  const [notes, setNotes] = useState(initialNotes)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter notes based on search query
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Notes</h2>

          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search notes..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center border border-border rounded-md overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>

            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Note
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                whileHover={{ y: -2 }}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium truncate">{note.title}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {note.isStarred ? (
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ) : (
                        <Star className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Avatar className="h-5 w-5 mr-1">
                      <AvatarImage src={note.createdBy.avatar} />
                      <AvatarFallback>{note.createdBy.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{note.createdBy.name}</span>
                    <span className="mx-1">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Updated {formatDate(note.updatedAt)}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm text-muted-foreground line-clamp-3">
                    {note.content.split("\n").slice(1, 4).join("\n")}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {note.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-muted rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                whileHover={{ x: 2 }}
                className="flex items-center p-3 bg-card border border-border rounded-lg hover:shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="mr-3 text-muted-foreground">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h3 className="font-medium truncate">{note.title}</h3>
                    {note.isStarred && <Star className="h-4 w-4 ml-2 text-yellow-500 fill-yellow-500" />}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Updated {formatDate(note.updatedAt)}</span>
                    <span className="mx-1">•</span>
                    <span>{note.createdBy.name}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex flex-wrap gap-1">
                    {note.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-muted rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {note.tags.length > 2 && (
                      <span className="px-2 py-0.5 bg-muted rounded-full text-xs">+{note.tags.length - 2}</span>
                    )}
                  </div>

                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredNotes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No notes found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery ? "Try a different search term" : "Create your first note to get started"}
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Note
            </Button>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
