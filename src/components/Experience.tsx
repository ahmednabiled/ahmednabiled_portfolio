import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const technicalSkills = [
  { name: 'Python', level: 'expert' },
  { name: 'Git', level: 'novice' },
  { name: 'Numpy', level: 'novice' },
  { name: 'Pandas', level: 'novice' },
  { name: 'C++ / C#', level: 'novice' },
  { name: 'LeetCode', level: 'novice' },
];

const creativeSkills = [
  { name: 'Blender', level: 'expert' },
  { name: 'Gimp', level: 'master' },
];

export const Experience = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-google-sans mb-2">
            {translations.exploreMy[language]}
          </p>
          <h2 className="text-4xl font-bold font-google-sans">
            {translations.experience[language]}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 font-google-sans">
              {translations.technical[language]}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-400">
                      {translations[skill.level][language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 font-google-sans">
              {translations.creative[language]}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {creativeSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-400">
                      {translations[skill.level][language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};