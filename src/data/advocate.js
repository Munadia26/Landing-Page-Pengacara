
import advocatePhoto from '@/assets/Supriyadi1.jpeg';

export const advocate = {
  name: import.meta.env.VITE_ADVOCATE_NAME,
  image: advocatePhoto,
  title: import.meta.env.VITE_ADVOCATE_TITLE,
  status: import.meta.env.VITE_ADVOCATE_STATUS,
  contact: {
    whatsapp: import.meta.env.VITE_ADVOCATE_WHATSAPP,
  },
  videoUrl: import.meta.env.VITE_YOUTUBE_URL,
};