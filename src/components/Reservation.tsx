import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Reservation: React.FC = () => {
  return (
    <section id="reserve" className="py-24 bg-stone-900 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-5xl text-washi mb-6">Reservations</h2>
            <p className="font-body text-stone-400 leading-relaxed max-w-md">
              We accept reservations up to two months in advance. For parties larger than four, please contact us directly via phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gold">
                <MapPin size={20} className="mt-1" />
                <div>
                  <h4 className="font-display text-washi text-lg">Location</h4>
                  <p className="font-body text-stone-500 text-sm">
                    570-12 Gionmachi<br />
                    Higashiyama Ward, Kyoto<br />
                    605-0074, Japan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gold">
                <Clock size={20} className="mt-1" />
                <div>
                  <h4 className="font-display text-washi text-lg">Hours</h4>
                  <p className="font-body text-stone-500 text-sm">
                    Lunch: 12:00 – 14:30<br />
                    Dinner: 17:30 – 22:00<br />
                    <span className="italic">Closed Wednesdays</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gold">
                <Phone size={20} className="mt-1" />
                <div>
                  <h4 className="font-display text-washi text-lg">Contact</h4>
                  <p className="font-body text-stone-500 text-sm">+81 75-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-gold">
                <Mail size={20} className="mt-1" />
                <div>
                   <h4 className="font-display text-washi text-lg">Inquiries</h4>
                   <p className="font-body text-stone-500 text-sm">info@kiyomizu-kyoto.jp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Form */}
        <div className="bg-sumi p-8 md:p-12 border border-white/5 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-body text-xs text-gold uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-stone-900/50 border-b border-white/10 focus:border-gold outline-none text-washi py-2 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="font-body text-xs text-gold uppercase tracking-widest">Guests</label>
                <select className="w-full bg-stone-900/50 border-b border-white/10 focus:border-gold outline-none text-washi py-2 transition-colors">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-body text-xs text-gold uppercase tracking-widest">Date</label>
              <input type="date" className="w-full bg-stone-900/50 border-b border-white/10 focus:border-gold outline-none text-stone-400 py-2 transition-colors" />
            </div>

            <div className="space-y-2">
               <label className="font-body text-xs text-gold uppercase tracking-widest">Course Preference</label>
               <select className="w-full bg-stone-900/50 border-b border-white/10 focus:border-gold outline-none text-washi py-2 transition-colors">
                  <option>Hana (Lunch)</option>
                  <option>Tsuki (Dinner)</option>
                  <option>Yuki (Premium)</option>
                </select>
            </div>

            <button type="button" className="w-full bg-gold text-sumi font-body font-bold uppercase tracking-widest py-4 mt-8 hover:bg-white transition-colors duration-300">
              Request Availability
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Reservation;