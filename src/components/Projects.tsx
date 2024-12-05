import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const projects = [
  {
    titleKey: 'projectAiTitle',
    descKey: 'projectAiDesc',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    link: '#',
  },
  {
    titleKey: 'projectDashboardTitle',
    descKey: 'projectDashboardDesc',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    link: '#',
  },
  {
    titleKey: 'projectMlTitle',
    descKey: 'projectMlDesc',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    link: '#',
  },
];

export const Projects = () => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{translations.projectsTitle[language]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} 
               className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl 
                        transition-shadow duration-300">
              <img src={project.image} alt={translations[project.titleKey][language]} 
                   className="w-full h-64 object-cover transition-transform duration-300 
                            group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                            flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {translations[project.titleKey][language]}
                </h3>
                <p className="text-gray-200">{translations[project.descKey][language]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};