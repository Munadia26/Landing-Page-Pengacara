
import Profileimage from '@/assets/ProfileBackground.png';

export const profile = {
  name: import.meta.env.VITE_ORG_NAME,
  badge: import.meta.env.VITE_ORG_BADGE,
  headline: import.meta.env.VITE_ORG_HEADLINE,
  subheading: import.meta.env.VITE_ORG_SUBHEADING,
  aboutImage: Profileimage,
  description: import.meta.env.VITE_ORG_DESCRIPTION,
  contact: {
    address: import.meta.env.VITE_CONTACT_ADDRESS,
    phone: import.meta.env.VITE_CONTACT_PHONE,
    email: import.meta.env.VITE_CONTACT_EMAIL,
    whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP,
    mapUrl: import.meta.env.VITE_MAP_URL,
    youtubeUrl: import.meta.env.VITE_YOUTUBE_CHANNEL_URL,
  }
};
