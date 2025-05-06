type Theme = 'dark' | 'light';

// Function to get theme from localStorage or use default
export const getStoredTheme = (): Theme => {
  // Check if we're in the browser
  if (typeof window === 'undefined') return 'dark';

  // Try to get from localStorage
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  
  // If no stored theme, check user preference
  if (!storedTheme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  }
  
  return storedTheme;
};

// Function to set theme in localStorage and apply to document
export const setTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  // Store in localStorage
  localStorage.setItem('theme', theme);
  
  // Apply theme to document
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

// Toggle theme function
export const toggleTheme = (): Theme => {
  const currentTheme = getStoredTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
};

// Initialize theme on page load
export const initializeTheme = (): void => {
  setTheme(getStoredTheme());
};