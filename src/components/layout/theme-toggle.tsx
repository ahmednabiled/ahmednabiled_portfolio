import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '../ui/button';
import { useMounted } from '@/hooks/use-mounted';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </Button>
  );
}