import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-800/10 backdrop-blur-sm
                shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-gray-400" />
      <span className="sr-only">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};