import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function About() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            Add your detailed introduction here
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <AspectRatio ratio={4/3}>
                <img
                  src={`https://images.unsplash.com/photo-${i}?w=400&h=300&fit=crop`}
                  alt={`Interest ${i}`}
                  className="rounded-lg object-cover"
                />
              </AspectRatio>
              <h3 className="text-xl font-semibold mt-4">Interest {i}</h3>
              <p className="text-muted-foreground">Description of your interest</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">AI-Generated Artwork</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <AspectRatio ratio={16/9}>
              <div className="w-full h-full bg-muted flex items-center justify-center">
                Add AI-generated image 1
              </div>
            </AspectRatio>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={16/9}>
              <div className="w-full h-full bg-muted flex items-center justify-center">
                Add AI-generated image 2
              </div>
            </AspectRatio>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interesting Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Fact 1</h3>
            <p className="text-muted-foreground">Add your first interesting fact</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Fact 2</h3>
            <p className="text-muted-foreground">Add your second interesting fact</p>
          </Card>
        </div>
      </section>
    </div>
  )
}