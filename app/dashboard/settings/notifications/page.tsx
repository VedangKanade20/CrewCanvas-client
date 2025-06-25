"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Save, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotificationsSettingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    teamInvites: true,
    teamUpdates: true,
    taskAssignments: true,
    taskComments: true,
    directMessages: true,
    marketingEmails: false,
    notificationFrequency: "immediate",
  })

  const handleSwitchChange = (name) => {
    setNotificationSettings((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleRadioChange = (value) => {
    setNotificationSettings((prev) => ({ ...prev, notificationFrequency: value }))
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
                <h1 className="text-3xl font-bold">Notification Settings</h1>
                <p className="text-muted-foreground">Manage how and when you receive notifications</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Channels</CardTitle>
                    <CardDescription>Choose how you want to receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotifications" className="font-medium">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={() => handleSwitchChange("emailNotifications")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushNotifications" className="font-medium">
                          Push Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={() => handleSwitchChange("pushNotifications")}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Types</CardTitle>
                    <CardDescription>Select which types of notifications you want to receive</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="teamInvites" className="font-medium">
                          Team Invites
                        </Label>
                        <p className="text-sm text-muted-foreground">When you're invited to a team</p>
                      </div>
                      <Switch
                        id="teamInvites"
                        checked={notificationSettings.teamInvites}
                        onCheckedChange={() => handleSwitchChange("teamInvites")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="teamUpdates" className="font-medium">
                          Team Updates
                        </Label>
                        <p className="text-sm text-muted-foreground">When there are updates to your teams</p>
                      </div>
                      <Switch
                        id="teamUpdates"
                        checked={notificationSettings.teamUpdates}
                        onCheckedChange={() => handleSwitchChange("teamUpdates")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="taskAssignments" className="font-medium">
                          Task Assignments
                        </Label>
                        <p className="text-sm text-muted-foreground">When tasks are assigned to you</p>
                      </div>
                      <Switch
                        id="taskAssignments"
                        checked={notificationSettings.taskAssignments}
                        onCheckedChange={() => handleSwitchChange("taskAssignments")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="taskComments" className="font-medium">
                          Task Comments
                        </Label>
                        <p className="text-sm text-muted-foreground">When someone comments on your tasks</p>
                      </div>
                      <Switch
                        id="taskComments"
                        checked={notificationSettings.taskComments}
                        onCheckedChange={() => handleSwitchChange("taskComments")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="directMessages" className="font-medium">
                          Direct Messages
                        </Label>
                        <p className="text-sm text-muted-foreground">When you receive direct messages</p>
                      </div>
                      <Switch
                        id="directMessages"
                        checked={notificationSettings.directMessages}
                        onCheckedChange={() => handleSwitchChange("directMessages")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketingEmails" className="font-medium">
                          Marketing Emails
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive product updates and announcements</p>
                      </div>
                      <Switch
                        id="marketingEmails"
                        checked={notificationSettings.marketingEmails}
                        onCheckedChange={() => handleSwitchChange("marketingEmails")}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Frequency</CardTitle>
                    <CardDescription>Choose how often you want to receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={notificationSettings.notificationFrequency}
                      onValueChange={handleRadioChange}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate" className="font-medium">
                          Immediate
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hourly" id="hourly" />
                        <Label htmlFor="hourly" className="font-medium">
                          Hourly Digest
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="daily" id="daily" />
                        <Label htmlFor="daily" className="font-medium">
                          Daily Digest
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly" className="font-medium">
                          Weekly Digest
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
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
