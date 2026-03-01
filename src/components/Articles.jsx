import React, { useState } from 'react';
import { articles } from '@/data/articles'; //
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Pastikan mengimpor Link

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedArticles = [...articles] //
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedArticles.length) % sortedArticles.length);
  };

  return (
    <section id="artikel" className="section-padding bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Wawasan Hukum</h2>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">Berita & Edukasi Terbaru</h3>
          <div className="w-20 h-1.5 bg-[hsl(var(--gold))] mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl text-[hsl(var(--gold))] flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl text-[hsl(var(--gold))] flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} />
          </button>

          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)` }}
            >
              {sortedArticles.map((article) => (
                <div key={article.id} className="w-full lg:w-1/3 flex-shrink-0 px-4 mb-10">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-[550px]">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[hsl(var(--gold))] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {article.category}
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center space-x-4 text-gray-400 text-xs mb-4">
                        <Calendar size={14} className="text-[hsl(var(--gold))]" />
                        <span>{article.date}</span>
                      </div>
                      <Link 
                        to={`/artikel/${article.id}`} 
                        className="mt-auto inline-flex items-center space-x-2 text-[hsl(var(--gold))] text-sm font-bold group/link"
                      >
                      <h4 className="text-xl font-bold mb-4 group-hover:text-[hsl(var(--gold))] transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4></Link>
                      
                      <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">
                        {article.content}
                      </p>

                      {/* Link ke Detail Artikel menggunakan <Link> */}
                      <Link 
                        to={`/artikel/${article.id}`} 
                        className="mt-auto inline-flex items-center space-x-2 text-[hsl(var(--gold))] text-sm font-bold group/link"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol Lihat Semua Artikel menggunakan <Link> */}
        <div className="mt-16 text-center">
          <Link 
            to="/artikel" 
            className="inline-flex items-center px-8 py-3 bg-[hsl(var(--navy))] text-white font-bold rounded-full hover:bg-[hsl(var(--gold))] transition-all duration-300 shadow-xl"
          >
            Lihat Semua Artikel
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;