import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-google-sans mb-2">
            {translations.getToKnow[language]}
          </p>
          <h2 className="text-4xl font-bold font-google-sans">
            {translations.aboutMe[language]}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
              alt="Ahmed Nabil"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <span className="p-2 bg-purple-900 rounded-full">
                    {translations.experienceIcon[language]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center font-google-sans">
                  {translations.experience[language]}
                </h3>
                <p className="text-center text-gray-300 mt-2">
                  6 {translations.month[language]}
                </p>
                <p className="text-center text-gray-300">
                  {translations.dataScience[language]}
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <span className="p-2 bg-blue-900 rounded-full">
                    {translations.educationIcon[language]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center font-google-sans">
                  {translations.education[language]}
                </h3>
                <p className="text-center text-gray-300 mt-2">
                  B.Sc. CCSE
                </p>
                <p className="text-center text-gray-300">
                  {translations.mansouraUniversity[language]}
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed font-google-sans">
              {translations.aboutDescription[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};