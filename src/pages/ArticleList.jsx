import React, { useState } from 'react';
import { articles } from '@/data/articles';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[hsl(var(--navy))] pt-40 pb-16 lg:pt-52 lg:pb-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wawasan Hukum</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Temukan informasi terbaru, edukasi, dan berita terkini seputar dunia hukum di Indonesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Bar Pencarian & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <p className="text-gray-500 font-medium">Menampilkan {filteredArticles.length} Artikel</p>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Cari judul artikel..."
                className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                  <img src={article.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute top-4 left-4 px-4 py-1 bg-[hsl(var(--gold))] text-white text-[10px] font-bold uppercase rounded-full">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center text-gray-400 text-xs mb-4">
                    <Calendar size={14} className="mr-2 text-[hsl(var(--gold))]" />
                    {article.date}
                  </div>
                  <h4 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">
                    {article.content}
                  </p>
                  <Link to={`/artikel/${article.id}`} className="inline-flex items-center text-[hsl(var(--gold))] font-bold group/link">
                    Baca Selengkapnya <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Maaf, artikel yang Anda cari tidak ditemukan.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleList;