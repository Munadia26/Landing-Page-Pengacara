import React from 'react';
import { partners } from '../data/partners';

const Partners = () => {
  return (
    <section id="kerjasama" className="section-padding bg-[hsl(var(--bg-light))]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Kerja Sama</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Mitra Strategis Kami</h3>
          <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
          {partners.map((partner) => (
            /* Menghapus class grayscale supaya warna asli muncul */
            <div 
              key={partner.id} 
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 md:max-h-20 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;