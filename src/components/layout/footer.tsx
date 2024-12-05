import { useLanguage } from '@/context/LanguageContext';
import { Container } from '../ui/container';
import { translations } from '@/translations';

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {year} Ahmed Nabil. {translations.copyright[language]}
        </div>
      </Container>
    </footer>
  );
}