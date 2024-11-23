import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Game() {
  const [score, setScore] = useState(0)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">AI Game</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" />
              How to Play
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Game Instructions</DialogTitle>
              <DialogDescription>
                Add your game instructions here...
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Gamepad2 className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Game Title</h2>
        </div>
        
        <div className="bg-muted rounded-lg p-4 mb-4">
          <p className="text-lg font-semibold">Score: {score}</p>
        </div>

        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          {/* Game canvas will go here */}
          <p className="text-muted-foreground">Game content will be added here</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={() => setScore(0)}>Reset Game</Button>
        </div>
      </Card>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Planned Updates</h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Player Suggestions</h3>
            <p className="text-muted-foreground mt-2">
              Have an idea for the game? Add your suggestions here!
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}