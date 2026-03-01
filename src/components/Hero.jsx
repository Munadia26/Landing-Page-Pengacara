import React from 'react';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f1c2e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] blur-3xl transform -translate-y-1/2 -translate-x-1/2 opacity-20"></div>
      </div>

      {/* PENYESUAIAN DI SINI: 
          pt-32 (Mobile) dan lg:pt-44 (Desktop) 
          untuk memberikan ruang bagi Navbar + Top Header baru 
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-40 lg:pt-44 pb-20">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-pulse"></span>
            <span className="text-white/80 text-xs font-medium uppercase tracking-widest">{profile.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1]">
            {profile.headline.split('&').map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent italic">&</span>}
                {part}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-lg text-white/70 max-w-xl leading-relaxed text-justify">
            {profile.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${profile.contact.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold flex items-center justify-center space-x-3 text-center px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:bg-[#25D366] hover:text-white group"
            >
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Konsultasi Sekarang</span>
            </a>
            <a href="#layanan" className="btn-outline-gold text-center !text-white !border-white/30 hover:!bg-white/10 flex items-center justify-center">
              Pelajari Layanan
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
            <img 
              src={profile.heroImage}
              alt="LKBH Amanah Hero" 
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--gold))] opacity-20 blur-2xl rounded-full"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[hsl(var(--gold))] opacity-20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;