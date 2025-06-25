"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Users,
  Settings,
  PlusCircle,
  User,
  Bell,
  Palette,
  Shield,
  Puzzle,
  HelpCircle,
  LifeBuoy,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-border bg-card hidden md:block z-30">
      <ScrollArea className="h-full py-6 px-3">
        <div className="space-y-6">
          {/* Main navigation */}
          <div>
            <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">Main</h3>
            <nav className="space-y-1">
              <Button
                variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-3" />
                  Dashboard
                </Link>
              </Button>

              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Users className="h-4 w-4 mr-3" />
                All Team Spaces
              </Button>
            </nav>
          </div>

          {/* Create new team space */}
          <div className="px-4">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Team Space
            </Button>
          </div>

          {/* Settings */}
          <div className="pt-4 border-t border-border">
            <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant={pathname.includes("/dashboard/settings") ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-between"
                >
                  <span className="flex items-center">
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform ${isSettingsOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pt-1 pl-10">
                <Button
                  variant={pathname === "/dashboard/settings/account" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/settings/account")}
                >
                  <User className="h-4 w-4 mr-3" />
                  Account
                </Button>
                <Button
                  variant={pathname === "/dashboard/settings/notifications" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/settings/notifications")}
                >
                  <Bell className="h-4 w-4 mr-3" />
                  Notifications
                </Button>
                <Button
                  variant={pathname === "/dashboard/settings/appearance" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/settings/appearance")}
                >
                  <Palette className="h-4 w-4 mr-3" />
                  Appearance
                </Button>
                <Button
                  variant={pathname === "/dashboard/settings/security" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/settings/security")}
                >
                  <Shield className="h-4 w-4 mr-3" />
                  Security
                </Button>
                <Button
                  variant={pathname === "/dashboard/settings/integrations" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/settings/integrations")}
                >
                  <Puzzle className="h-4 w-4 mr-3" />
                  Integrations
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start mt-1"
              onClick={() => router.push("/dashboard/help")}
            >
              <HelpCircle className="h-4 w-4 mr-3" />
              Help & Support
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start mt-1"
              onClick={() => router.push("/dashboard/contact")}
            >
              <LifeBuoy className="h-4 w-4 mr-3" />
              Contact Support
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
