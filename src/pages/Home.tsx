import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
              alt="Professional photo of Max"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to My Professional Portfolio
            </h1>
            <p className="text-lg text-gray-600">
              Hi, I'm Max Rossiter, a Computer Science student at the University of Minnesota Duluth, 
              expected to graduate in 2025. I'm passionate about software development and creating 
              innovative solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/maxrossiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/maxrossiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Full-stack Development</li>
              <li>• Python & Java Programming</li>
              <li>• Web Technologies (HTML, CSS, JavaScript)</li>
              <li>• Database Management</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Focus</h3>
            <p className="text-gray-600 mb-2">Currently working on advanced coursework in:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Software Engineering</li>
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&h=400"
              alt="Photography"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Photography</h3>
              <p className="text-gray-600">
                Capturing moments and perspectives through my lens, specializing in landscape 
                and street photography.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&h=400"
              alt="Rock Climbing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rock Climbing</h3>
              <p className="text-gray-600">
                Challenging myself both physically and mentally while exploring beautiful 
                outdoor locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}