import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import MenuCourses from './components/MenuCourses';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  // Simple loading state for that initial "reveal" feel
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-sumi transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      <main>
        <Hero />
        <Philosophy />
        <MenuCourses />
        <Gallery />
        <Reservation />
      </main>

      <footer className="py-8 text-center border-t border-stone/30 font-display text-sm text-stone-400">
        <p>© {new Date().getFullYear()} KIYOMIZU KYOTO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;