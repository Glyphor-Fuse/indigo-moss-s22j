import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.pexels.com/photos/32944669/pexels-photo-32944669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Nigiri" },
    { src: "https://images.pexels.com/photos/18510255/pexels-photo-18510255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", alt: "Sake", className: "md:row-span-2 h-full" },
    { src: "https://images.pexels.com/photos/14469273/pexels-photo-14469273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Uni" },
    { src: "https://images.pexels.com/photos/29537707/pexels-photo-29537707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Garden", className: "md:col-span-2" },
    { src: "https://images.pexels.com/photos/18698241/pexels-photo-18698241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Grill" },
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