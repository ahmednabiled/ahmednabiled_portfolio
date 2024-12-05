import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const copyright = {
    en: `© ${year} Ahmed Nabil. All rights reserved.`,
    ar: `© ${year} أحمد نبيل. جميع الحقوق محفوظة.`
  };

  return (
    <footer className="py-6 bg-gray-800/50">
      <div className="container mx-auto px-6 text-center text-sm text-gray-400">
        {copyright[language]}
      </div>
    </footer>
  );
};