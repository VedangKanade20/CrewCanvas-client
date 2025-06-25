"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Loader2, Moon, Sun, Monitor } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AppearanceSettingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "system",
    fontSize: "medium",
    colorScheme: "default",
    reducedMotion: false,
  })

  const handleThemeChange = (value) => {
    setAppearanceSettings((prev) => ({ ...prev, theme: value }))
  }

  const handleFontSizeChange = (value) => {
    setAppearanceSettings((prev) => ({ ...prev, fontSize: value }))
  }

  const handleColorSchemeChange = (value) => {
    setAppearanceSettings((prev) => ({ ...prev, colorScheme: value }))
  }

  const handleReducedMotionChange = (value) => {
    setAppearanceSettings((prev) => ({ ...prev, reducedMotion: value === "true" }))
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
                <h1 className="text-3xl font-bold">Appearance Settings</h1>
                <p className="text-muted-foreground">Customize the look and feel of your workspace</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme</CardTitle>
                    <CardDescription>Choose your preferred theme</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={appearanceSettings.theme}
                      onValueChange={handleThemeChange}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted transition-colors">
                        <Sun className="h-8 w-8 text-yellow-500" />
                        <RadioGroupItem value="light" id="light" className="sr-only" />
                        <Label htmlFor="light" className="font-medium">
                          Light
                        </Label>
                        <p className="text-sm text-muted-foreground text-center">Light mode for bright environments</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted transition-colors">
                        <Moon className="h-8 w-8 text-blue-500" />
                        <RadioGroupItem value="dark" id="dark" className="sr-only" />
                        <Label htmlFor="dark" className="font-medium">
                          Dark
                        </Label>
                        <p className="text-sm text-muted-foreground text-center">
                          Dark mode for low-light environments
                        </p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-muted transition-colors">
                        <Monitor className="h-8 w-8 text-purple-500" />
                        <RadioGroupItem value="system" id="system" className="sr-only" />
                        <Label htmlFor="system" className="font-medium">
                          System
                        </Label>
                        <p className="text-sm text-muted-foreground text-center">Follow your system preferences</p>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Display Options</CardTitle>
                    <CardDescription>Customize your display preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fontSize">Font Size</Label>
                      <Select value={appearanceSettings.fontSize} onValueChange={handleFontSizeChange}>
                        <SelectTrigger id="fontSize">
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="colorScheme">Color Scheme</Label>
                      <Select value={appearanceSettings.colorScheme} onValueChange={handleColorSchemeChange}>
                        <SelectTrigger id="colorScheme">
                          <SelectValue placeholder="Select color scheme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="purple">Purple</SelectItem>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="green">Green</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reducedMotion">Reduced Motion</Label>
                      <Select
                        value={appearanceSettings.reducedMotion.toString()}
                        onValueChange={handleReducedMotionChange}
                      >
                        <SelectTrigger id="reducedMotion">
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="false">Normal animations</SelectItem>
                          <SelectItem value="true">Reduced animations</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Reduces motion for users who prefer minimal animations
                      </p>
                    </div>
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
