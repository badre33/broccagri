import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Hook global pour gérer la direction RTL
export function useGlobalDirection() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const updateDirection = () => {
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = i18n.language;
    };
    
    // Appliquer immédiatement
    updateDirection();
    
    // Écouter les changements de langue
    i18n.on('languageChanged', updateDirection);
    
    // Nettoyage
    return () => {
      i18n.off('languageChanged', updateDirection);
    };
  }, [i18n]);
}