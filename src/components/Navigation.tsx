import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Omakase', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reserve' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-6 flex justify-between items-center ${
          isScrolled ? 'bg-sumi/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-washi/30 rounded-full flex items-center justify-center">
                <span className="font-jp text-xs">清</span>
            </div>
            <span className="font-display tracking-[0.2em] text-lg uppercase text-washi">Kiyomizu</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-body text-xs uppercase tracking-widest text-washi/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-washi hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-sumi z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="font-display text-3xl text-washi hover:text-gold italic"
          >
            {link.name}
          </a>
        ))}
        <div className="font-jp text-stone-500 mt-8 writing-vertical text-xl">
            一期一会
        </div>
      </div>
    </>
  );
};

export default Navigation;