"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Bell, Palette, Shield, Puzzle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()

  const settingsCategories = [
    {
      title: "Account",
      description: "Manage your account details and preferences",
      icon: User,
      path: "/dashboard/settings/account",
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      title: "Notifications",
      description: "Configure how and when you receive notifications",
      icon: Bell,
      path: "/dashboard/settings/notifications",
      color: "bg-orange-500/10",
      textColor: "text-orange-500",
    },
    {
      title: "Appearance",
      description: "Customize the look and feel of your workspace",
      icon: Palette,
      path: "/dashboard/settings/appearance",
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
    },
    {
      title: "Security",
      description: "Manage your password and security preferences",
      icon: Shield,
      path: "/dashboard/settings/security",
      color: "bg-green-500/10",
      textColor: "text-green-500",
    },
    {
      title: "Integrations",
      description: "Connect with third-party services and tools",
      icon: Puzzle,
      path: "/dashboard/settings/integrations",
      color: "bg-red-500/10",
      textColor: "text-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 p-6 pt-24 md:pl-64">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground mb-8">Manage your account settings and preferences</p>

            <div className="grid gap-6">
              {settingsCategories.map((category) => (
                <Card
                  key={category.title}
                  className="hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => router.push(category.path)}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                    <div className={`${category.color} p-2 rounded-full`}>
                      <category.icon className={`h-5 w-5 ${category.textColor}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{category.description}</CardDescription>
                    <Button variant="ghost" className="p-0 h-auto" onClick={() => router.push(category.path)}>
                      Manage <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
