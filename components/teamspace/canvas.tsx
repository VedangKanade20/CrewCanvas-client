"use client"

import { useState, useRef } from "react"
import {
  Pencil,
  Square,
  Circle,
  Type,
  Image,
  Trash2,
  Hand,
  Undo,
  Redo,
  Download,
  Share,
  Plus,
  Minus,
  MousePointer,
  StickyNote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CanvasProps {
  teamSpace: any
}

export function Canvas({ teamSpace }: CanvasProps) {
  const [activeTool, setActiveTool] = useState("select")
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [zoom, setZoom] = useState(100)
  const canvasRef = useRef(null)

  const tools = [
    { id: "select", name: "Select", icon: MousePointer },
    { id: "hand", name: "Hand", icon: Hand },
    { id: "pencil", name: "Pencil", icon: Pencil },
    { id: "square", name: "Square", icon: Square },
    { id: "circle", name: "Circle", icon: Circle },
    { id: "text", name: "Text", icon: Type },
    { id: "sticky", name: "Sticky Note", icon: StickyNote },
    { id: "image", name: "Image", icon: Image },
  ]

  // Simulate active users on canvas
  const activeUsers = teamSpace.members.filter((member) => member.isOnline).slice(0, 3)

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-2 border-b border-border flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-semibold">Canvas: {teamSpace.name} Whiteboard</h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted rounded-md px-2 py-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              disabled={zoom <= 50}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm mx-2">{zoom}%</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setZoom(Math.min(200, zoom + 10))}
              disabled={zoom >= 200}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="icon">
            <Undo className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Redo className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Canvas area */}
        <div
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "center",
            backgroundImage: "radial-gradient(circle, #ddd 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Sample content */}
          <div className="absolute left-[30%] top-[20%] w-40 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-md border border-blue-300 dark:border-blue-700 p-3 shadow-sm">
            <h3 className="text-sm font-medium">Project Goals</h3>
            <ul className="text-xs mt-1 list-disc pl-4">
              <li>Improve user experience</li>
              <li>Increase conversion rate</li>
              <li>Reduce bounce rate</li>
            </ul>
          </div>

          <div className="absolute left-[60%] top-[30%] w-36 h-36 bg-green-100 dark:bg-green-900/30 rounded-md border border-green-300 dark:border-green-700 p-3 shadow-sm">
            <h3 className="text-sm font-medium">Timeline</h3>
            <div className="text-xs mt-2 space-y-1">
              <div>Research: 2 weeks</div>
              <div>Design: 3 weeks</div>
              <div>Development: 4 weeks</div>
              <div>Testing: 1 week</div>
            </div>
          </div>

          <div className="absolute left-[40%] top-[50%] w-32 h-32 bg-yellow-100 dark:bg-yellow-900/30 rounded-md border border-yellow-300 dark:border-yellow-700 p-3 shadow-sm">
            <h3 className="text-sm font-medium">Ideas</h3>
            <div className="text-xs mt-2">Brainstorm new features for the dashboard view</div>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 150,150 C 200,100 250,300 350,250"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="text-gray-400"
            />
            <path d="M 350,250 L 450,200" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
          </svg>
        </div>

        {/* Active users cursors */}
        {activeUsers.map((user, index) => (
          <div
            key={user.id}
            className="absolute pointer-events-none"
            style={{
              left: `${30 + index * 15}%`,
              top: `${40 + index * 10}%`,
              transition: "all 0.5s ease",
            }}
          >
            <div className="flex flex-col items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M4 4L12 20L14 15L19 13L4 4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="mt-1 bg-background border border-border rounded-full px-2 py-0.5 text-xs flex items-center shadow-sm">
                <Avatar className="h-4 w-4 mr-1">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{user.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg shadow-md overflow-hidden">
        <div className="p-1 space-y-1">
          <TooltipProvider>
            {tools.map((tool) => (
              <Tooltip key={tool.id}>
                <TooltipTrigger asChild>
                  <Button
                    variant={activeTool === tool.id ? "secondary" : "ghost"}
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setActiveTool(tool.id)}
                  >
                    <tool.icon className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{tool.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <div className="border-t border-border my-1"></div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-destructive">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Stroke width control */}
      {activeTool === "pencil" && (
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg shadow-md p-3 w-48">
          <div className="space-y-2">
            <label className="text-sm font-medium">Stroke Width</label>
            <Slider value={[strokeWidth]} onValueChange={(value) => setStrokeWidth(value[0])} max={10} step={1} />
            <div
              className="h-[strokeWidth]px bg-foreground rounded-full mt-2"
              style={{ height: `${strokeWidth}px` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}
