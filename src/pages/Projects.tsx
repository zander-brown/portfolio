import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">UMD/Duluth Showcase</h2>
        <Card className="p-6">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full bg-muted flex items-center justify-center">
              Your UMD/Duluth video will go here
            </div>
          </AspectRatio>
          <div className="mt-4">
            <h3 className="text-xl font-bold">About UMD/Duluth</h3>
            <p className="text-muted-foreground mt-2">
              Add your description about UMD or Duluth here
            </p>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">AI-Generated Media Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="p-4">
              <AspectRatio ratio={1}>
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  AI-Generated Image {i}
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[1, 2].map((i) => (
            <Card key={i} className="p-4">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  AI-Generated Video {i}
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
        <Card className="p-6">
          <h3 className="text-xl font-bold">Personal Portfolio Website</h3>
          <p className="text-muted-foreground mt-2">
            A showcase of my work and skills, built with modern web technologies
          </p>
          <div className="mt-4 flex space-x-4">
            <Button>
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "shadcn/ui",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}export function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-lg text-muted-foreground">
        Here you can find a collection of my personal and professional projects.
      </p>
    </div>
  );
}
