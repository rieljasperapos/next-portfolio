
import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  console.log(theme);
  console.log(textColorClass);

  return { theme, textColorClass, toggleTheme };
};

export default useTheme;
