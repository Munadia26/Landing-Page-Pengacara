import { services } from '../data/services';
import { Gavel, Users, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <section id="layanan" className="section-padding bg-[hsl(var(--bg-light))]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-3 md:space-y-4">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Layanan Hukum</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))]">Solusi Hukum</h3>
          <div className="w-16 md:w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-base md:text-lg">
            Kami menyediakan pendampingan hukum profesional baik di dalam maupun di luar pengadilan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 card-hover flex flex-col">
              <div className="flex items-center space-x-4 md:space-x-6 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[hsl(var(--navy))] text-[hsl(var(--gold))] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                  {service.title === 'Litigasi' ? <Gavel size={24} className="md:size-[32px]" /> : <Users size={24} className="md:size-[32px]" />}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold">{service.title}</h4>
              </div>

              <p className="text-gray-600 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed text-justify">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 flex-1">
                {service.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[hsl(var(--gold))] bg-opacity-10 rounded-full flex items-center justify-center text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))] group-hover:text-white transition-all duration-300 shrink-0">
                      <CheckCircle2 size={14} className="md:size-[16px]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-gray-100">
                <a href="#profil" className="text-[hsl(var(--gold))] font-bold flex items-center space-x-2 group text-sm md:text-base">
                  <span>Konsultasikan Perkara Anda</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
