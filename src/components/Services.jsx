import React from 'react';
import { services } from '../data/services';
import { Gavel, Users, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <section id="layanan" className="section-padding bg-[hsl(var(--bg-light))]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Layanan Hukum</h2>
          <h3 className="text-4xl md:text-4xl font-bold">Solusi Hukum</h3>
          <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-lg">
            Kami menyediakan pendampingan hukum profesional baik di dalam maupun di luar pengadilan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 card-hover flex flex-col">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-16 h-16 bg-[hsl(var(--navy))] text-[hsl(var(--gold))] rounded-2xl flex items-center justify-center shadow-lg">
                  {service.title === 'Litigasi' ? <Gavel size={32} /> : <Users size={32} />}
                </div>
                <h4 className="text-3xl font-bold">{service.title}</h4>
              </div>

              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 flex-1">
                {service.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-[hsl(var(--gold))] bg-opacity-10 rounded-full flex items-center justify-center text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <a href="#profil" className="text-[hsl(var(--gold))] font-bold flex items-center space-x-2 group">
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
