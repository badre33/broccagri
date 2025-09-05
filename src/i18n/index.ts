import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import ar from './locales/ar.json';

const resources = {
  fr: {
    translation: fr
  },
  ar: {
    translation: ar
  }
};

// Récupérer la langue sauvegardée ou utiliser le français par défaut
const savedLanguage = localStorage.getItem('i18nextLng') || 'fr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Utiliser la langue sauvegardée
    fallbackLng: 'fr',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;