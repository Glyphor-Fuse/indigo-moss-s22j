import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29518226/pexels-photo-29518226.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Freshly prepared assorted sushi in traditional Japanese packaging displayed in a market."
    width="7008"
    height="4083"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/delicious-assorted-sushi-in-japanese-packaging-29518226/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by G N on Pexels
    </a>
  </div>
</div>" 
          alt="Sushi Counter Background" 
          className="w-full h-full object-cover scale-105 animate-[pulseSlow_10s_infinite_alternate]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sumi/40 via-sumi/20 to-sumi/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="font-jp text-washi/80 text-xl tracking-[0.5em]">京都</span>
            <div className="h-16 w-[1px] bg-gold/50"></div>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-washi tracking-tight animate-slide-up opacity-0 mix-blend-overlay" style={{ animationDelay: '0.4s' }}>
          <span className="italic block mb-2">The Art of</span>
          <span className="uppercase tracking-[0.15em] font-light">Silence</span>
        </h1>

        <p className="font-body text-washi/70 text-sm md:text-base tracking-widest uppercase max-w-md animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Omakase Experience in Gion
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-washi/50">
        <ChevronDown size={20} />
      </div>

      {/* Vertical Japanese Text (Decorative) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="writing-vertical font-jp text-washi/20 text-4xl select-none">
          季節の恵み
        </p>
      </div>
    </section>
  );
};

export default Hero;