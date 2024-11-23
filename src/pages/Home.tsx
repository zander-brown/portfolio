import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
          {/* Add your professional photo here */}
          <AspectRatio ratio={1}>
            <img
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=300&h=300&fit=crop"
              alt="Placeholder profile"
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-xl text-muted-foreground">Your Tagline</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Welcome Video</h2>
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-muted flex items-center justify-center">
            Add your welcome video here
          </div>
        </AspectRatio>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=450&fit=crop"
                alt="Hobby 1"
                className="rounded-lg object-cover"
              />
            </AspectRatio>
            <h3 className="text-xl font-semibold mt-4">Hobby 1</h3>
            <p className="text-muted-foreground">Description of your first hobby</p>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1495563923587-bdc4282494d0?w=800&h=450&fit=crop"
                alt="Hobby 2"
                className="rounded-lg object-cover"
              />
            </AspectRatio>
            <h3 className="text-xl font-semibold mt-4">Hobby 2</h3>
            <p className="text-muted-foreground">Description of your second hobby</p>
          </Card>
        </div>
      </section>
    </div>
  )
}export function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <p className="text-lg text-muted-foreground">
        Welcome to my portfolio website. Feel free to explore and learn more about my work.
      </p>
    </div>
  );
}
