"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Loader2, Github, Slack, Figma, ChromeIcon as Google, Trello, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

export default function IntegrationsSettingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const integrations = [
    {
      id: "github",
      name: "GitHub",
      description: "Connect your GitHub account to sync repositories and issues",
      icon: Github,
      connected: true,
      color: "text-black dark:text-white",
    },
    {
      id: "slack",
      name: "Slack",
      description: "Connect Slack to receive notifications and updates",
      icon: Slack,
      connected: true,
      color: "text-[#4A154B]",
    },
    {
      id: "figma",
      name: "Figma",
      description: "Connect Figma to access design files and prototypes",
      icon: Figma,
      connected: false,
      color: "text-[#F24E1E]",
    },
    {
      id: "google",
      name: "Google Workspace",
      description: "Connect Google Workspace for calendar and document integration",
      icon: Google,
      connected: true,
      color: "text-[#4285F4]",
    },
    {
      id: "trello",
      name: "Trello",
      description: "Connect Trello to sync boards and cards",
      icon: Trello,
      connected: false,
      color: "text-[#0079BF]",
    },
    {
      id: "calendar",
      name: "Apple Calendar",
      description: "Connect Apple Calendar to sync events and reminders",
      icon: Calendar,
      connected: false,
      color: "text-[#FF3B30]",
    },
  ]

  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.reduce((acc, integration) => {
      acc[integration.id] = integration.connected
      return acc
    }, {}),
  )

  const handleToggleIntegration = (id) => {
    setConnectedIntegrations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 p-6 pt-24 md:pl-64">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard/settings")} className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Settings
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Integrations</h1>
                <p className="text-muted-foreground">Connect with third-party services and tools</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                {integrations.map((integration) => (
                  <Card key={integration.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-muted">
                            <integration.icon className={`h-6 w-6 ${integration.color}`} />
                          </div>
                          <CardTitle>{integration.name}</CardTitle>
                        </div>
                        <Switch
                          id={integration.id}
                          checked={connectedIntegrations[integration.id]}
                          onCheckedChange={() => handleToggleIntegration(integration.id)}
                        />
                      </div>
                      <CardDescription>{integration.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {connectedIntegrations[integration.id] ? (
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Connected</p>
                          <p className="text-sm text-muted-foreground">This integration is active and syncing data</p>
                        </div>
                      ) : (
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-sm font-medium text-muted-foreground mb-1">Not Connected</p>
                          <p className="text-sm text-muted-foreground">
                            Connect this integration to start syncing data
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      {connectedIntegrations[integration.id] ? (
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      ) : (
                        <Button size="sm">Connect</Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle>Save Changes</CardTitle>
                    <CardDescription>Apply your integration preferences</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Preferences
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
