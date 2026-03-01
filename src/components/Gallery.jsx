import React, { useState } from 'react';
import { gallery } from '../data/gallery';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fungsi navigasi slider utama
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Fungsi navigasi di dalam Modal Zoom
  const navigateModal = (direction, e) => {
    e.stopPropagation(); // Mencegah modal tertutup saat klik tombol
    const currentIndexInData = gallery.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndexInData + 1) % gallery.length;
    } else {
      newIndex = (currentIndexInData - 1 + gallery.length) % gallery.length;
    }
    setSelectedImage(gallery[newIndex]);
  };

  return (
    <section id="galeri" className="section-padding bg-[hsl(var(--bg-light))] overflow-hidden relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Galeri Aktivitas</h2>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">Momen & Dokumentasi Kegiatan</h3>
          <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-base">
            Potret dedikasi LKBH Amanah dalam melayani dan mendampingi setiap langkah hukum klien.
          </p>
        </div>

        {/* Slider Utama */}
        <div className="relative group px-4 md:px-12">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg text-[hsl(var(--navy))] flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg text-[hsl(var(--navy))] flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)` }}
            >
              {gallery.map((item) => (
                <div key={item.id} className="w-full lg:w-1/3 flex-shrink-0 px-2 md:px-4">
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL ZOOM (Lightbox) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop gelap */}
          <div className="absolute inset-0 bg-[#0f1c2e]/95 backdrop-blur-md" onClick={() => setSelectedImage(null)}></div>
          
          {/* Konten Modal */}
          <div className="relative z-10 max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/30 rounded-full transition-colors text-white lg:text-gray-800"
            >
              <X size={24} />
            </button>

            {/* Tombol Navigasi Modal - KIRI (BERWARNA GOLD) */}
            <button 
              onClick={(e) => navigateModal('prev', e)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[hsl(var(--gold))] text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-90 transition-all border-2 border-white/20"
            >
              <ChevronLeft size={36} strokeWidth={3} />
            </button>

            {/* Tombol Navigasi Modal - KANAN (BERWARNA GOLD) */}
            <button 
              onClick={(e) => navigateModal('next', e)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[hsl(var(--gold))] text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-90 transition-all border-2 border-white/20"
            >
              <ChevronRight size={36} strokeWidth={3} />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Gambar Zoom */}
              <div className="lg:w-2/3 bg-black flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-contain"
                />
              </div>
              
              {/* Deskripsi */}
              <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-[hsl(var(--gold))] font-bold text-xs uppercase tracking-widest mb-2">Dokumentasi</span>
                <h4 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">{selectedImage.title}</h4>
                <div className="w-12 h-1 bg-[hsl(var(--gold))] mb-6"></div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{selectedImage.description}"
                </p>
                <p className="mt-8 text-xs text-gray-400 font-medium">
                   {gallery.findIndex(img => img.id === selectedImage.id) + 1} / {gallery.length} Kegiatan
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;