import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient-x" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 py-12 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 
                       bg-clip-text text-transparent animate-gradient-x font-google-sans">
            {translations.heroTitle[language]}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed 
                      font-google-sans">
            {translations.heroDescription[language]}
          </p>
          <div className="mt-8">
            <a href="/notes" 
               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full 
                        hover:opacity-90 transition-all duration-300 inline-block font-google-sans">
              {translations.getInTouch[language]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};