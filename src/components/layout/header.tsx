import { siteConfig } from '@/config/site';
import { useScroll } from '@/hooks/use-scroll';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import { Container } from '../ui/container';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function Header() {
  const scrolled = useScroll();
  const { language } = useLanguage();

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    )}>
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">
            {language === 'en' ? 'Ahmed Nabil' : 'أحمد نبيل'}
          </h1>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              {Object.entries(siteConfig.links).map(([key, url]) => {
                const Icon = {
                  github: Github,
                  linkedin: Linkedin,
                  youtube: Youtube
                }[key];

                return (
                  <Button
                    key={key}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{key}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}