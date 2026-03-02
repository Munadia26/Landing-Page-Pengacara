import { profile } from '../data/profile';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b141f] text-white pt-16 md:pt-24 pb-10 md:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--gold))] opacity-[0.02] blur-[100px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-20">
          <div className="space-y-6 md:space-y-8">
            <a href="#" className="text-2xl md:text-3xl font-bold tracking-wider flex flex-col leading-none">
              <span className="text-[hsl(var(--gold))]">LKBH</span>
              <span>AMANAH</span>
            </a>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-sm italic text-justify">
              {profile.description}
            </p>

          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="text-xl md:text-2xl font-bold flex items-center">
              Navigasi Cepat
              <span className="ml-4 w-12 h-1 bg-[hsl(var(--gold))] rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6 md:gap-x-10">
              <a href="#profil" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Profil</a>
              <a href="#layanan" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Layanan</a>
              <a href="#advokat" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Advokat</a>
              <a href="#galeri" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Galeri</a>
              <a href="#artikel" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Artikel</a>
              <a href="#kerjasama" className="text-white/60 hover:text-[hsl(var(--gold))] transition-colors duration-300 text-sm md:text-lg">Kerja Sama</a>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="text-xl md:text-2xl font-bold flex items-center">
              Kontak Kami
              <span className="ml-4 w-12 h-1 bg-[hsl(var(--gold))] rounded-full"></span>
            </h4>
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start space-x-4 md:space-x-6">
                <MapPin className="text-[hsl(var(--gold))] shrink-0 mt-1 size-5 md:size-6" />
                <p className="text-white/60 text-sm md:text-lg">{profile.contact.address}</p>
              </div>
              <div className="flex items-start space-x-4 md:space-x-6">
                {/* Ikon tetap di samping (kiri) */}
                <Phone className="text-[hsl(var(--gold))] shrink-0 mt-1 size-5 md:size-6" />

                {/* Kontainer untuk nomor-nomor telepon agar tersusun ke bawah (kanan) */}
                <div className="flex flex-col space-y-1">
                  <p className="text-white/60 text-sm md:text-lg leading-tight">{profile.contact.phone}</p>

                  {profile.contact.phone1 && (
                    <p className="text-white/60 text-sm md:text-lg leading-tight">{profile.contact.phone1}</p>
                  )}

                  {profile.contact.phone2 && (
                    <p className="text-white/60 text-sm md:text-lg leading-tight">{profile.contact.phone2}</p>
                  )}
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-6">
                <Mail className="text-[hsl(var(--gold))] shrink-0 mt-1 size-5 md:size-6" />
                <p className="text-white/60 text-sm md:text-lg">{profile.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">
            &copy; {new Date().getFullYear()} LKBH AMANAH. All Rights Reserved.
          </p>
          <div className="flex space-x-10">
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">Syarat & Ketentuan</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
