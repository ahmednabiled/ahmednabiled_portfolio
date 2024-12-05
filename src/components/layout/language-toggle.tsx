import { Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '../ui/button';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      <span className="sr-only">{language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}