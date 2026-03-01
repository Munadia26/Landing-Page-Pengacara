import React, { useLayoutEffect } from 'react'; //
import { Routes, Route, useLocation } from 'react-router-dom'; //
import Navbar from '@/components/Navbar'; //
import Footer from '@/components/Footer'; //
import WhatsAppFloat from '@/components/WhatsappFloat';

// Import Halaman
import Home from './pages/index'; //
import ArticleList from './pages/ArticleList'; //
import ArticleDetail from './pages/ArticleDetail'; //

function App() {
  const { pathname } = useLocation();

  // Menggunakan useLayoutEffect agar posisi scroll direset 
  // SEBELUM browser menggambar ulang halaman baru.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel" element={<ArticleList />} />
          <Route path="/artikel/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;