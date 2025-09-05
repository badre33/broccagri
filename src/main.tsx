import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Gestion initiale de la direction RTL
const initializeDirection = () => {
  const savedLang = localStorage.getItem('i18nextLng') || 'fr';
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = savedLang;
};

initializeDirection();

createRoot(document.getElementById("root")!).render(<App />);
