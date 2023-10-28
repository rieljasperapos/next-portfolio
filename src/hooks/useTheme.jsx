'use client'

import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', newTheme);s
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  // console.log(theme);
  // console.log(textColorClass);

  return { theme, textColorClass, toggleTheme };
};

export default useTheme;
