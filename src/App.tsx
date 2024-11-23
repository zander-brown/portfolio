import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Game from './pages/Game';
import Discovery from './pages/Discovery';
import Contact from './pages/Contact';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("App component is being rendered");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-20 px-4 md:px-8 lg:px-16 pb-24">
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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
        <button
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Music size={20} />
          {isMusicPlaying ? 'Pause Music' : 'Play Music'}
        </button>
        <p className="text-sm text-gray-500">&copy; 2024 Zander Brown</p>
      </div>
    </div>
  );
}

export default App;
