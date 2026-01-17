import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/32944669/pexels-photo-32944669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="A stylish sushi dish with chopsticks, soy sauce, and ginger on a bamboo mat. Perfect for food styling needs."
    width="3504"
    height="3504"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/elegant-sushi-plate-with-soy-sauce-and-chopsticks-32944669/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by J KREATOR on Pexels
    </a>
  </div>
</div>", alt: "Nigiri" },
    { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/18510255/pexels-photo-18510255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Bottle of Japanese sake with two ceramic cups on a dimly lit bar counter, perfect for tasting."
    width="4160"
    height="5552"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/a-drink-in-a-glass-bottle-and-small-cups-on-the-bar-counter-18510255/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Nadin Sh on Pexels
    </a>
  </div>
</div>", alt: "Sake", className: "md:row-span-2 h-full" },
    { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/14469273/pexels-photo-14469273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Delicious crispy sushi rolls topped with fried ingredients served on a wooden tray in a restaurant setting."
    width="4083"
    height="4083"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-shot-of-slices-of-sushi-14469273/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Alan Retano on Pexels
    </a>
  </div>
</div>", alt: "Uni" },
    { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29537707/pexels-photo-29537707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A tranquil Japanese garden with lush greenery reflecting in a pond, offering a serene zen atmosphere."
    width="7008"
    height="4672"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/serene-japanese-zen-garden-reflection-29537707/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by G N on Pexels
    </a>
  </div>
</div>", alt: "Garden", className: "md:col-span-2" },
    { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/18698241/pexels-photo-18698241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="A vibrant display of grilled fish, rice, and fresh vegetables, perfect for a traditional meal."
    width="6336"
    height="6336"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/food-photography-18698241/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by aboodi vesakaran on Pexels
    </a>
  </div>
</div>", alt: "Grill" },
  ];

  return (
    <section id="gallery" className="py-24 bg-sumi px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12 px-2">
          <div>
             <h2 className="font-display text-4xl text-washi mb-2">Atmosphere</h2>
             <p className="font-body text-stone-500 text-sm">Where tradition meets modernity</p>
          </div>
          <div className="hidden md:block">
            <span className="font-jp text-3xl text-stone-700 select-none">美意識</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group rounded-sm ${img.className || ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;