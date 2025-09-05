import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

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

// Composant de changement de langue
export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLanguage === 'ar' ? 'العربية' : 'Français'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border">
        <DropdownMenuItem 
          onClick={() => changeLanguage('fr')}
          className={currentLanguage === 'fr' ? 'bg-muted' : ''}
        >
          🇫🇷 Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('ar')}
          className={currentLanguage === 'ar' ? 'bg-muted' : ''}
        >
          🇲🇦 العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};