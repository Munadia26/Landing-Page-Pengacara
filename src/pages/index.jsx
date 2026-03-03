import Hero from '../components/Hero';
import ProfileContact from '../components/ProfileContact';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Advocate from '../components/Advocate';
import Gallery from '../components/Gallery';
import Articles from '../components/Articles';
import Partners from '../components/Partners';
import YouTubeLive from '../components/YouTubeLive';

// Data untuk pengecekan (Conditional Rendering)
import { articles } from '../data/articles';
import { gallery } from '../data/gallery';
import { partners } from '../data/partners';

const Home = () => {
  return (
    <>
      <Hero />
      <ProfileContact />
      <YouTubeLive />
      <Services />
      <CallToAction />
      <Advocate />

      {/* Menampilkan section hanya jika datanya ada */}
      {gallery && gallery.length > 0 && <Gallery />}
      {articles && articles.length > 0 && <Articles />}
      {partners && partners.length > 0 && <Partners />}
    </>
  );
};

export default Home;