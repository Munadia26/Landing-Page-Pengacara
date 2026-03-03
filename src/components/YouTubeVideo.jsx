import PropTypes from 'prop-types';

const YouTubeVideo = ({ url }) => {
  if (!url) return null;

  // Function to extract video ID from YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title="YouTube Video"
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Decorative pulse for live status if applicable */}
      {url.includes('/live/') && (
        <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 bg-red-600 rounded-full animate-pulse z-10 pointer-events-none">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Live</span>
        </div>
      )}
    </div>
  );
};

YouTubeVideo.propTypes = {
  url: PropTypes.string
};

export default YouTubeVideo;
