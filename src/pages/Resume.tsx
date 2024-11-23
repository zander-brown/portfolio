import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Building2, GraduationCap, Trophy, Code } from "lucide-react"

export function Resume() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Resume</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Building2 className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Professional Experience</h2>
        </div>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Position Title</h3>
            <p className="text-muted-foreground">Company Name • 2023 - Present</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Key achievement or responsibility</li>
              <li>Another significant accomplishment</li>
              <li>Notable project or contribution</li>
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <GraduationCap className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <Card className="p-6">
          <h3 className="text-xl font-bold">University of Minnesota Duluth</h3>
          <p className="text-muted-foreground">Bachelor's Degree • Expected 2025</p>
          <p className="mt-2">Major: Computer Science</p>
          <p className="text-muted-foreground">Relevant Coursework:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Course 1</li>
            <li>Course 2</li>
            <li>Course 3</li>
          </ul>
        </Card>
      </section>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Code className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "Python", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Leadership",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Certifications</h2>
        </div>
        <Card className="p-6">
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-bold">Certification Name</h3>
              <p className="text-muted-foreground">Issuing Organization • Year</p>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  )
}export function Resume() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Resume</h1>
      <p className="text-lg text-muted-foreground">
        This page will contain my professional experience, education, and skills.
      </p>
    </div>
  );
}
