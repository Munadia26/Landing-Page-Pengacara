import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Menu, X, MapPin, Mail } from 'lucide-react';
import logoUrl from '@/assets/Logo.png'; 
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.contact.address)}`;

  const WaIcon = ({ size = 14 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 1. TOP BAR (Gold) - Responsif */}
      <div className={`w-full bg-[#c9a84c] text-[#0f1c2e] transition-all duration-500 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-[200px] opacity-100'
      }`}>
        <div className="container mx-auto px-4 md:px-12 py-2 flex flex-col lg:flex-row items-center justify-between gap-y-2 lg:gap-4 text-[11px] md:text-xs font-bold uppercase tracking-tight">
          
          {/* Alamat - Terpotong rapi di mobile jika terlalu panjang */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors text-center lg:text-left">
            <MapPin size={14} className="shrink-0" />
            <span className="line-clamp-1 lg:line-clamp-none">{profile.contact.address}</span>
          </a>

          {/* Email & WhatsApp Group */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-8 shrink-0 w-full lg:w-auto justify-center">
            {/* Email - Tetap kelihatan di mobile */}
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} /> <span>{profile.contact.email}</span>
            </a>
            
            {/* WhatsApp numbers - Membungkus otomatis (wrap) agar tidak hilang */}
            <div className="flex items-center gap-2 sm:border-l border-[#0f1c2e]/20 sm:pl-4">
              <WaIcon size={14} />
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                {[profile.contact.phone, profile.contact.phone1, profile.contact.phone2].map((num, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="opacity-40 hidden sm:inline">|</span>}
                    <a href={`https://wa.me/${num.replace(/\D/g, '')}`} target="_blank" className="hover:text-white transition-colors whitespace-nowrap">
                      {num}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV (Navy) */}
      <nav className={`w-full transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-[#0f1c2e] py-2' : 'bg-[#0f1c2e]/95 py-3'
      }`}>
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" className="h-9 md:h-12 w-auto" />
            <div className="flex flex-col text-base md:text-xl font-bold text-white leading-none">
              <span className="text-[#c9a84c]">LKBH</span>
              <span>AMANAH</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {['Profil', 'Layanan', 'Advokat', 'Galeri', 'Artikel', 'Kerja Sama'].map((name) => (
              <HashLink 
                key={name} 
                smooth 
                to={`/#${name.toLowerCase().replace(' ', '')}`} 
                className="text-white/90 hover:text-[#c9a84c] text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {name}
              </HashLink>
            ))}
            <HashLink 
              smooth 
              to="/#profil" 
              className="bg-[#c9a84c] text-[#0f1c2e] px-5 py-2 rounded-lg font-bold text-xs uppercase hover:bg-white transition-all shadow-md"
            >
              Hubungi Kami
            </HashLink>
          </div>

          {/* Toggle Mobile */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-full left-0 w-full bg-[#0f1c2e] border-t border-white/5 transition-all duration-300 lg:hidden overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col px-8 space-y-4 text-white">
            {['Profil', 'Layanan', 'Advokat', 'Galeri', 'Artikel', 'Kerja Sama'].map((name) => (
              <HashLink 
                key={name} 
                smooth 
                to={`/#${name.toLowerCase().replace(' ', '')}`} 
                className="text-white/80 text-sm font-bold uppercase py-2 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </HashLink>
            ))}
            
            {/* Info Kontak Lengkap di Mobile Dropdown */}
            <div className="mt-4 pt-4 space-y-4">
              <a href={googleMapsUrl} target="_blank" className="flex items-start gap-3 text-white/70 text-xs">
                <MapPin size={18} className="text-[#c9a84c] shrink-0" /> {profile.contact.address}
              </a>
              <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 text-white/70 text-xs">
                <Mail size={18} className="text-[#c9a84c]" /> {profile.contact.email}
              </a>
              <div className="grid grid-cols-1 gap-3 border-l border-[#c9a84c]/40 pl-4">
                {[profile.contact.phone, profile.contact.phone1, profile.contact.phone2].map((num, i) => (
                  <a key={i} href={`https://wa.me/${num.replace(/\D/g, '')}`} target="_blank" className="flex items-center gap-3 text-white/70 text-xs">
                    <WaIcon size={16} /> {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;