import { Card } from "@/components/ui/card"
import { Building2, Briefcase } from "lucide-react"

export function Discovery() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Discovery</h1>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Building2 className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Topic Research</h2>
        </div>
        <Card className="p-6">
          <h3 className="text-xl font-bold">Selected Topic</h3>
          <p className="text-muted-foreground mt-2">
            Add your chosen topic description here
          </p>
          
          <h4 className="text-lg font-semibold mt-6">Related Companies</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card className="p-4">
              <h5 className="font-bold">Company 1</h5>
              <p className="text-muted-foreground mt-2">
                Description of how this company relates to your topic
              </p>
            </Card>
            <Card className="p-4">
              <h5 className="font-bold">Company 2</h5>
              <p className="text-muted-foreground mt-2">
                Description of how this company relates to your topic
              </p>
            </Card>
          </div>
        </Card>
      </section>

      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Briefcase className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Career Fair Companies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Company 1</h3>
            <p className="text-muted-foreground mt-2">
              Why I'm a good fit for this company
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Relevant skill or experience</li>
              <li>Alignment with company values</li>
              <li>Interest in company's work</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Company 2</h3>
            <p className="text-muted-foreground mt-2">
              Why I'm a good fit for this company
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Relevant skill or experience</li>
              <li>Alignment with company values</li>
              <li>Interest in company's work</li>
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">References & Resources</h2>
        <Card className="p-6">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-primary hover:underline">
                Resource Link 1
              </a>
              <p className="text-muted-foreground mt-1">
                Brief description of this resource
              </p>
            </li>
            <li>
              <a href="#" className="text-primary hover:underline">
                Resource Link 2
              </a>
              <p className="text-muted-foreground mt-1">
                Brief description of this resource
              </p>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  )
}export function Discovery() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Discovery</h1>
      <p className="text-lg text-muted-foreground">
        Explore and discover new content and features here.
      </p>
    </div>
  );
}
