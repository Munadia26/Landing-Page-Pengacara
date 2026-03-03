import YouTubeVideo from './YouTubeVideo';
import { advocate } from '../data/advocate';

const YouTubeLive = () => {
  if (!advocate.videoUrl) return null;

  return (
    <section id="youtube-live" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--gold))] opacity-[0.03] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--gold))] mb-3">Live Streaming</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6 leading-tight">
              Edukasi Hukum & Live Update
            </h3>
            <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Ikuti siaran langsung kami untuk mendapatkan wawasan hukum terbaru, konsultasi gratis secara live, dan update terkini mengenai layanan LKBH Amanah.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative animate-in fade-in zoom-in duration-1000 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border-8 border-white">
            <YouTubeVideo url={advocate.videoUrl} />
          </div>

          {/* Call to action below video */}
          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@pengadilannegerimagelang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[hsl(var(--navy))] font-bold hover:text-[hsl(var(--gold))] transition-colors duration-300 group"
            >
              <span className="border-b-2 border-current pb-1">Kunjungi Channel YouTube Kami</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeLive;
