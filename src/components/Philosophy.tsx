import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-sumi relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div className="order-2 md:order-1 space-y-8">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="font-body text-xs tracking-[0.3em] text-gold uppercase">Philosophy</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-washi leading-tight">
            Honoring the <span className="italic text-washi/60">Shun</span> (Season)
          </h2>
          
          <div className="space-y-6 text-stone-400 font-body leading-relaxed max-w-lg">
            <p>
              In Kyoto, we do not merely cook; we listen. We listen to the water, the soil, and the turning of the seasons. Our <span className="italic text-washi">shari</span> (rice) is seasoned with red vinegar aged for three years, creating a warmth that embraces the fish.
            </p>
            <p>
              Chef Kenjiro's philosophy is rooted in <em>Sudo</em> — the way of doing only what is necessary. No excess. Just the purest expression of the ingredient at its peak moment.
            </p>
          </div>

          <div className="pt-8">
            <img 
              src="https://images.pexels.com/photos/31827099/pexels-photo-31827099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Chef Signature" 
              className="h-24 opacity-60 invert" 
            />
          </div>
        </div>

        {/* Image Side */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-4 border border-washi/10 rounded-sm z-0 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
          <div className="relative z-10 overflow-hidden rounded-sm">
            <img 
              src="https://images.pexels.com/photos/9698111/pexels-photo-9698111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Chef Hands" 
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
            />
            {/* Overlay Text on Image */}
            <div className="absolute bottom-0 right-0 p-8">
               <p className="writing-vertical font-jp text-white text-3xl drop-shadow-lg">職人技</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;