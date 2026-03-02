import { profile } from '../data/profile';
import { Phone, Mail, MapPin } from 'lucide-react';

const ProfileContact = () => {
  return (
    <section id="profil" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(var(--navy))] opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        {/* JUDUL: Ukuran Medium & Terpusat */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">Profil & Kontak</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-4">
            LKBH Amanah
          </h3>
          <div className="w-16 md:w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
        </div>

        {/* GRID: Menggunakan max-w-6xl untuk lebar yang pas */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start max-w-6xl mx-auto">

          {/* BAGIAN KIRI: FOTO & DESKRIPSI */}
          <div className="flex flex-col space-y-6">
            {/* Card Foto - Tinggi 320px (Pas, tidak terlalu pendek/tinggi) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={profile.aboutImage}
                alt="Tentang LKBH Amanah"
                className="w-full h-64 md:h-[320px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))]/30 to-transparent"></div>
            </div>

            {/* Card Deskripsi - Padding p-8 agar lega tapi ringkas */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border-l-8 border-[hsl(var(--gold))]">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-[hsl(var(--navy))]">Tentang Kami</h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify italic">
                &quot;{profile.description}&quot;
              </p>
            </div>
          </div>

          {/* BAGIAN KANAN: KARTU KONTAK */}
          <div className="bg-[#0f1c2e] text-white rounded-3xl p-6 md:p-10 shadow-xl border-t-8 border-[hsl(var(--gold))] h-full">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center">
              Informasi Kontak
              <span className="ml-4 flex-grow h-[1px] bg-white/10"></span>
            </h3>

            <div className="space-y-5 md:space-y-6">
              {/* Alamat */}
              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))] group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Alamat Kantor</h4>
                  <p className="text-sm md:text-base leading-snug">{profile.contact.address}</p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))] group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Telepon / Hotline</h4>
                  <div className="text-sm md:text-base space-y-1">
                    <p>{profile.contact.phone}</p>
                    {profile.contact.phone1 && <p>{profile.contact.phone1}</p>}
                    {profile.contact.phone2 && <p>{profile.contact.phone2}</p>}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))] group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Email Resmi</h4>
                  <p className="text-sm md:text-base">{profile.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Tombol WhatsApp */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
              <a
                href={`https://wa.me/${profile.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--gold))] hover:bg-[#25D366] text-[hsl(var(--navy))] hover:text-white flex items-center justify-center space-x-3 w-full py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 shadow-lg group/wa"
              >
                {/* Menggunakan ikon SVG langsung agar pasti muncul dan bisa dikontrol warnanya */}
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 md:w-6 md:h-6 fill-current transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileContact;