"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleDashed } from "lucide-react"

interface JoinTeamSpaceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function JoinTeamSpaceDialog({ open, onOpenChange }: JoinTeamSpaceDialogProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [inviteCode, setInviteCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, let's say "DEMO123" is a valid code
      if (inviteCode === "DEMO123") {
        // Redirect to the team space
        router.push(`/teamspace/team-1`)
        onOpenChange(false)
      } else {
        setError("Invalid invite code. Please try again.")
      }
    } catch (error) {
      setError("Failed to join team space. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Join a team space</DialogTitle>
          <DialogDescription>Enter the invite code to join an existing team space.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="inviteCode">Invite Code</Label>
            <Input
              id="inviteCode"
              placeholder="e.g. TEAM123"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              required
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <p className="text-xs text-muted-foreground">Hint: Use "DEMO123" to join a demo team space.</p>
          </div>

          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <CircleDashed className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Team Space"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
