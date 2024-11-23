import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="min-h-[150px]"
                />
              </div>
              
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:your@email.com" className="text-primary hover:underline">
                  your@email.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
              <Button variant="outline" className="w-full">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}export function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg text-muted-foreground">
        Get in touch with me through the contact information provided here.
      </p>
    </div>
  );
}
