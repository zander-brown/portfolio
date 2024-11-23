import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';
import { Game } from './pages/Game';
import { Discovery } from './pages/Discovery';
import { Contact } from './pages/Contact';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex">
                  <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold text-primary">Portfolio</span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/resume">Resume</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                  <NavLink to="/game">Game</NavLink>
                  <NavLink to="/discovery">Discovery</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <div className="flex items-center space-x-1 ml-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-2"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden border-t">
                <div className="container mx-auto px-4 py-2 space-y-1">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                  <MobileNavLink to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</MobileNavLink>
                  <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
                  <MobileNavLink to="/game" onClick={() => setIsMenuOpen(false)}>Game</MobileNavLink>
                  <MobileNavLink to="/discovery" onClick={() => setIsMenuOpen(false)}>Discovery</MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="icon" className="w-full">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="w-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </nav>

          <main className="flex-1 container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/game" element={<Game />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      {children}
    </Link>
  );
}

export default App;