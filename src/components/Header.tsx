import { Github, Linkedin, Youtube } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { language } = useLanguage();

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-medium text-white">
          {language === 'en' ? 'Ahmed Nabil' : 'أحمد نبيل'}
        </h1>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="https://github.com/ahmednabiled/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-nabil-184610154/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@ahmednabiled" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};