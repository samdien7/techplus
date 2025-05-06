import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme, getStoredTheme } from '../../utils/themeUtils';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState(getStoredTheme());

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;