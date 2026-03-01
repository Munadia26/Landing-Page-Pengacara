import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '@/data/articles';
import { profile } from '@/data/profile';
import { Calendar, Tag, ArrowLeft, Search, MessageCircle, ChevronUp } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const article = articles.find((a) => a.id === parseInt(id));

  const otherArticles = articles
    .filter((a) => a.id !== parseInt(id))
    .slice(0, 5);

  const filteredArticles = otherArticles.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/artikel', { state: { search: searchQuery } });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!article) return <div className="py-20 text-center">Artikel tidak ditemukan.</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section Mini */}
      <section className="bg-[hsl(var(--navy))] pt-32 pb-16 lg:py-24 text-white">
        <div className="container mx-auto px-6 mt-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Konten Utama (Kiri) */}
            <div className="lg:w-2/3">
              <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-[250px] md:h-[400px] lg:h-[550px] object-cover rounded-2xl md:rounded-3xl mb-8 shadow-lg"
            />
              
              <div className="flex items-center space-x-6 text-gray-500 mb-8 pb-8 border-b">
                <div className="flex items-center">
                  <Calendar size={18} className="text-[hsl(var(--gold))] mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={18} className="text-[hsl(var(--gold))] mr-2" />
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-12">
                <p className="text-xl font-medium mb-6 text-[hsl(var(--navy))]">
                  {article.content}
                </p>

                {article.Description === "TABLE_FORMAT" && article.tableData ? (
                  <div className="space-y-10 text-sm text-left">
                    {article.tableData.sections.map((section, si) => (
                      <div key={si}>
                        <h2 className="text-lg font-bold text-[hsl(var(--navy))] bg-blue-50 px-4 py-2 rounded-lg mb-6 border-l-4 border-[hsl(var(--navy))]">
                          {section.heading}
                        </h2>
                        {section.subsections.map((sub, subi) => (
                          <div key={subi} className="mb-8">
                            {sub.title && (
                              <h3 className="text-base font-bold text-[hsl(var(--navy))] mb-4 mt-4">
                                {sub.title}
                              </h3>
                            )}
                            {sub.tables.map((tbl, ti) => (
                              <div key={ti} className="mb-6">
                                {tbl.label && (
                                  <p className="font-semibold text-gray-600 mb-2 uppercase text-xs tracking-wider">
                                    {tbl.label}
                                  </p>
                                )}
                                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                  <table className="w-full text-xs border-collapse">
                                    <thead>
                                      <tr className="bg-[hsl(var(--navy))] text-white">
                                        {tbl.headers.map((h, hi) => (
                                          <th key={hi} className="px-4 py-3 text-left font-semibold border-r border-blue-800 last:border-r-0">
                                            {h}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {tbl.rows.map((row, ri) => (
                                        <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                          {row.map((cell, ci) => (
                                            <td key={ci} className="px-4 py-3 border-t border-gray-100 border-r last:border-r-0 align-top leading-relaxed">
                                              {cell}
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mb-4 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {article.Description}
                  </p>
                )}
               
              </div>

              {/* NAVIGASI PINDAH KE BAWAH */}
              <div className="pt-8 border-t border-gray-200">
                <HashLink 
                  smooth 
                  to="/#artikel" 
                  className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-xl text-[hsl(var(--navy))] font-bold hover:bg-[hsl(var(--gold))] hover:text-white hover:border-[hsl(var(--gold))] transition-all duration-300 shadow-sm"
                >
                  <ArrowLeft size={18} className="mr-2" /> Kembali ke Daftar Artikel
                </HashLink>
              </div>
            </div>

            {/* Sidebar (Kanan) */}
            <aside className="lg:w-1/3 space-y-10">
              
              {/* Box Pencarian */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                <h4 className="text-xl font-bold mb-6 text-[hsl(var(--navy))]">Cari Artikel</h4>
                <form onSubmit={handleSearch} className="relative">
                  <input 
                    type="text" 
                    placeholder="Masukkan kata kunci..."
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--gold))]">
                    <Search size={20} />
                  </button>
                </form>
              </div>

              {/* Artikel Lainnya */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                <h4 className="text-xl font-bold mb-6 text-[hsl(var(--navy))] border-b pb-4">
                  {searchQuery ? 'Hasil Pencarian' : 'Artikel Lainnya'}
                </h4>
                <div className="space-y-6">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((item) => (
                      <Link key={item.id} to={`/artikel/${item.id}`} className="group flex gap-4">
                        <img src={item.image} className="w-20 h-20 object-cover rounded-lg shrink-0" alt="" />
                        <div>
                          <h5 className="font-bold text-sm line-clamp-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                            {item.title}
                          </h5>
                          <span className="text-[10px] text-gray-400 uppercase">{item.date}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 italic">Tidak ada artikel ditemukan.</p>
                  )}
                </div>
              </div>

              {/* Hubungi Kami Box - WhatsApp Integration */}
              <div className="bg-[hsl(var(--navy))] p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-[hsl(var(--gold))]">Butuh Bantuan Hukum?</h4>
                <p className="text-sm mb-6 text-gray-300">Konsultasikan masalah hukum Anda secara langsung melalui WhatsApp.</p>
                <a 
                  href={`https://wa.me/${profile.contact.whatsapp.replace(/\s+/g, '')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 bg-[hsl(var(--gold))] text-[hsl(var(--navy))] px-6 py-4 rounded-2xl font-bold hover:bg-white transition-all shadow-lg group"
                >
                  {/* Ikon WhatsApp Resmi SVG */}
                  <svg 
                    role="img" 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Konsultasi Sekarang</span>
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>
      {/* Floating Scroll To Top Button — diletakkan di atas tombol WhatsApp */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '5rem',
          right: '1.25rem',
          zIndex: 50,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
        className="w-11 h-11 rounded-full bg-[hsl(var(--navy))] text-white shadow-xl flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:scale-110 transition-colors duration-300"
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ArticleDetail;