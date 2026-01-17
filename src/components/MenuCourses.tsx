import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenuCourses: React.FC = () => {
  const courses = [
    {
      title: "Hana (Flower)",
      subtitle: "Lunch Omakase",
      price: "¥18,000",
      items: ["Sakizuke (Appetizer)", "10 Nigiri", "Miso Soup", "Tamago", "Kanmi (Dessert)"],
      description: "A delightful introduction to Edo-mae style sushi, perfect for a midday respite."
    },
    {
      title: "Tsuki (Moon)",
      subtitle: "Dinner Omakase",
      price: "¥32,000",
      items: ["3 Tsumami (Appetizers)", "Sashimi Selection", "12 Nigiri", "Grilled Dish", "Uni Tasting", "Soup & Dessert"],
      description: "Our signature course. A rhythmic progression of flavors reflecting the moon's phases."
    },
    {
      title: "Yuki (Snow)",
      subtitle: "Premium Counter",
      price: "¥45,000",
      items: ["Chef's Special Selection", "Premium Seasonal Delicacies", "Abilone", "Wagyu Beef", "Unlimited Nigiri", "Matcha Ceremony"],
      description: "An unhurried, intimate experience where time stops. Ingredients sourced daily from Toyosu."
    }
  ];

  return (
    <section id="menu" className="py-24 bg-stone-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="font-jp text-gold text-lg">お品書き</span>
          <h2 className="font-display text-4xl md:text-5xl text-washi">The Courses</h2>
          <p className="font-body text-stone-400 text-sm tracking-wide max-w-md mx-auto">
            Please note that ingredients change daily based on market availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title} 
              className="group relative bg-sumi border border-white/5 p-8 md:p-12 hover:border-gold/30 transition-all duration-500 flex flex-col"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sumi px-4 py-1 border border-white/10 text-xs font-body text-gold uppercase tracking-widest">
                {course.subtitle}
              </div>

              <div className="mb-8 text-center border-b border-white/10 pb-8">
                <h3 className="font-display text-3xl text-washi mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
                <p className="font-display text-2xl text-stone-400 italic">{course.price}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {course.items.map((item) => (
                  <li key={item} className="font-body text-sm text-stone-300 flex items-center gap-3">
                    <span className="w-1 h-1 bg-gold rounded-full opacity-50"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-stone-500 leading-relaxed mb-8 border-t border-white/5 pt-6 italic">
                {course.description}
              </p>

              <button className="w-full py-4 border border-white/10 text-washi font-body text-xs uppercase tracking-widest hover:bg-washi hover:text-sumi transition-all duration-300 flex items-center justify-center gap-2">
                Book Table <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCourses;