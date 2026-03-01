import React from 'react';
import { advocate } from '../data/advocate';
import { Phone, MessageCircle } from 'lucide-react';

const Advocate = () => {
  return (
    <section id="advokat" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--gold))] opacity-[0.03] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Advokat LKBH Amanah</h2>
          <h3 className="text-4xl font-bold">Tenaga Profesional Berpengalaman</h3>
          <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Card: Diperkecil dari max-w-2xl ke max-w-md, Padding dikurangi */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 text-center max-w-md w-full relative group">
            
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full blur-xl opacity-20 scale-110 group-hover:opacity-40 transition-opacity duration-700"></div>
              {/* Ukuran Foto: Diperkecil dari w-64 ke w-40 */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={advocate.image} 
                  alt={advocate.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {/* Font Size: Diperkecil ke text-2xl */}
              <h4 className="text-2xl font-bold leading-tight">{advocate.name}</h4>
              <p className="text-sm font-bold text-[hsl(var(--gold))] uppercase tracking-widest">{advocate.status}</p>
              <p className="text-gray-500 text-sm max-w-xs mx-auto italic leading-relaxed">
                "{advocate.title}"
              </p>
            </div>

            <div className="flex justify-center pt-6 border-t border-gray-100">
  <a 
    href={`https://wa.me/${advocate.contact.whatsapp}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    // py-2.5 dan px-7 memberikan ukuran "Medium-Small" yang proporsional
    className="flex items-center justify-center space-x-2.5 w-full sm:w-auto px-7 py-2.5 bg-[hsl(var(--gold))] hover:bg-[#25D366] text-[hsl(var(--navy))] hover:text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg group/wa"
  >
    {/* Ikon dinaikkan sedikit ke w-5 h-5 (20px) */}
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      className="w-5 h-5 fill-current transition-colors duration-300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    {/* Teks dinaikkan ke text-sm agar lebih terbaca */}
    <span className="text-sm">Konsultasi Sekarang</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advocate;