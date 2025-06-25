"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Settings, Menu, X, LogOut, Home, Mic, MicOff, Share, MoreHorizontal, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { AvatarGroup } from "@/components/ui/avatar-group"

interface TeamSpaceHeaderProps {
  teamSpace: any
  onVoiceCallToggle: () => void
  isVoiceCallActive: boolean
}

export function TeamSpaceHeader({ teamSpace, onVoiceCallToggle, isVoiceCallActive }: TeamSpaceHeaderProps) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              CollabSpace
            </span>
          </Link>

          <div className="hidden md:flex items-center ml-8">
            <div className={`h-5 w-5 rounded-sm ${teamSpace.color} mr-3`}></div>
            <h1 className="font-semibold text-lg">{teamSpace.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center mr-4">
            <AvatarGroup>
              {teamSpace.members.slice(0, 3).map((member) => (
                <Avatar key={member.id} className="border-2 border-background">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              {teamSpace.members.length > 3 && (
                <Avatar className="border-2 border-background">
                  <AvatarFallback>+{teamSpace.members.length - 3}</AvatarFallback>
                </Avatar>
              )}
            </AvatarGroup>

            <Button variant="ghost" size="sm" className="ml-2">
              <Users className="h-4 w-4 mr-1" />
              {teamSpace.members.length}
            </Button>
          </div>

          <Button
            variant={isVoiceCallActive ? "default" : "outline"}
            size="sm"
            onClick={onVoiceCallToggle}
            className={isVoiceCallActive ? "bg-green-500 hover:bg-green-600" : ""}
          >
            {isVoiceCallActive ? (
              <>
                <MicOff className="h-4 w-4 mr-2" />
                Leave Call
              </>
            ) : (
              <>
                <Mic className="h-4 w-4 mr-2" />
                Join Voice
              </>
            )}
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Share className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Team Space Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="h-4 w-4 mr-2" />
                Manage Members
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                <Home className="h-4 w-4 mr-2" />
                Back to Dashboard
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4">
          <div className="flex items-center mb-4">
            <div className={`h-5 w-5 rounded-sm ${teamSpace.color} mr-3`}></div>
            <h1 className="font-semibold">{teamSpace.name}</h1>
          </div>

          <div className="mb-4">
            <h2 className="text-sm font-medium text-muted-foreground mb-2">Members</h2>
            <div className="flex flex-wrap gap-2">
              {teamSpace.members.map((member) => (
                <div key={member.id} className="flex items-center">
                  <Avatar className="h-6 w-6 mr-1">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => router.push("/dashboard")}
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
