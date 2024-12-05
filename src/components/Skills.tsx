import { Code, Database, Brain, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const skills = [
  {
    icon: Code,
    titleKey: 'programming',
    descKey: 'programmingDesc',
  },
  {
    icon: Database,
    titleKey: 'dataAnalysis',
    descKey: 'dataAnalysisDesc',
  },
  {
    icon: Brain,
    titleKey: 'aiMl',
    descKey: 'aiMlDesc',
  },
  {
    icon: Terminal,
    titleKey: 'tools',
    descKey: 'toolsDesc',
  },
];

export const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{translations.skillsTitle[language]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} 
                 className="p-6 bg-gray-800 rounded-xl shadow-lg 
                          hover:shadow-xl transition-shadow duration-300">
              <skill.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{translations[skill.titleKey][language]}</h3>
              <p className="text-gray-300">{translations[skill.descKey][language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};