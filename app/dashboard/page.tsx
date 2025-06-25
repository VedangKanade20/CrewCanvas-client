"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Plus,
  Search,
  Users,
  Layers,
  Clock,
  MoreHorizontal,
  Folder,
  FolderPlus,
  Pin,
  PinOff,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { CreateTeamSpaceDialog } from "@/components/dashboard/create-teamspace-dialog"
import { JoinTeamSpaceDialog } from "@/components/dashboard/join-teamspace-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for team spaces
const initialTeamSpaces = [
  {
    id: "team-1",
    name: "Product Design",
    description: "UI/UX design projects and resources",
    members: 8,
    updatedAt: "2 hours ago",
    pinned: true,
    color: "bg-blue-500",
  },
  {
    id: "team-2",
    name: "Marketing Campaign",
    description: "Q2 marketing strategy and assets",
    members: 12,
    updatedAt: "Yesterday",
    pinned: false,
    color: "bg-purple-500",
  },
  {
    id: "team-3",
    name: "Engineering Sprint",
    description: "Current sprint tasks and documentation",
    members: 15,
    updatedAt: "3 days ago",
    pinned: true,
    color: "bg-green-500",
  },
  {
    id: "team-4",
    name: "Research Project",
    description: "Market research and competitor analysis",
    members: 5,
    updatedAt: "1 week ago",
    pinned: false,
    color: "bg-orange-500",
  },
  {
    id: "team-5",
    name: "Customer Support",
    description: "Support tickets and customer feedback",
    members: 7,
    updatedAt: "2 days ago",
    pinned: false,
    color: "bg-red-500",
  },
  {
    id: "team-6",
    name: "Finance Team",
    description: "Budget planning and financial reports",
    members: 4,
    updatedAt: "5 days ago",
    pinned: false,
    color: "bg-yellow-500",
  },
  {
    id: "team-7",
    name: "HR Department",
    description: "Employee onboarding and company policies",
    members: 6,
    updatedAt: "1 week ago",
    pinned: false,
    color: "bg-pink-500",
  },
  {
    id: "team-8",
    name: "Legal Team",
    description: "Contracts and compliance documents",
    members: 3,
    updatedAt: "2 weeks ago",
    pinned: false,
    color: "bg-indigo-500",
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [teamSpaces, setTeamSpaces] = useState(initialTeamSpaces)

  // Filter team spaces based on search query
  const filteredTeamSpaces = teamSpaces.filter((space) => space.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Sort team spaces - pinned ones first, then alphabetically
  const sortedTeamSpaces = [...filteredTeamSpaces].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return a.name.localeCompare(b.name)
  })

  const handleTeamSpaceClick = (id) => {
    router.push(`/teamspace/${id}`)
  }

  const togglePin = (id) => {
    setTeamSpaces(teamSpaces.map((space) => (space.id === id ? { ...space, pinned: !space.pinned } : space)))
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 p-6 pt-24 md:pl-64">
          {/* Dashboard header */}
          <div className="max-w-6xl mx-auto">
            {/* Dashboard header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search team spaces..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Space
                </Button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FolderPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Create Team Space</h3>
                    <p className="text-sm text-muted-foreground">Start a new collaborative workspace</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => setIsCreateDialogOpen(true)}>
                  Create Space
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Join Team Space</h3>
                    <p className="text-sm text-muted-foreground">Join an existing workspace with a code</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => setIsJoinDialogOpen(true)}>
                  Join Space
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Templates</h3>
                    <p className="text-sm text-muted-foreground">Start with pre-built workspace templates</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Browse Templates
                </Button>
              </motion.div>
            </div>

            {/* All team spaces */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">All Team Spaces</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    View Members
                  </Button>
                  <Button variant="outline" size="sm">
                    <Layers className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedTeamSpaces.map((space) => (
                  <motion.div
                    key={space.id}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer relative"
                  >
                    {space.pinned && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded-bl-lg z-10">
                        Pinned
                      </div>
                    )}
                    <div className={`h-2 ${space.color}`}></div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3 flex-1" onClick={() => handleTeamSpaceClick(space.id)}>
                          <div
                            className={`h-10 w-10 rounded-md ${space.color} flex items-center justify-center text-white font-medium`}
                          >
                            {space.name.substring(0, 2)}
                          </div>
                          <div>
                            <h3 className="font-medium flex items-center">{space.name}</h3>
                            <p className="text-sm text-muted-foreground">{space.description}</p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation()
                                togglePin(space.id)
                              }}
                            >
                              {space.pinned ? (
                                <>
                                  <PinOff className="h-4 w-4 mr-2" />
                                  Unpin
                                </>
                              ) : (
                                <>
                                  <Pin className="h-4 w-4 mr-2" />
                                  Pin to top
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                              <Users className="h-4 w-4 mr-2" />
                              Manage members
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                              <Settings className="h-4 w-4 mr-2" />
                              Settings
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div
                        className="flex items-center justify-between text-sm text-muted-foreground"
                        onClick={() => handleTeamSpaceClick(space.id)}
                      >
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {space.members} members
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Updated {space.updatedAt}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Empty state if no team spaces are found */}
            {filteredTeamSpaces.length === 0 && (
              <div className="text-center py-12">
                <Folder className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No team spaces found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery ? "Try a different search term" : "Create your first team space to get started"}
                </p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Team Space
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Dialogs */}
      <CreateTeamSpaceDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />
      <JoinTeamSpaceDialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen} />
    </div>
  )
}
