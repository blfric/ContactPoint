import { AppRoot } from 'AppRoot';
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'Styling/themes';

export type ThemeOptions = {
  children: React.ReactNode
}

export type ThemeContextOptions = {
  currentTheme: string,
  toggleTheme:  () => void
}

export const defultContext: ThemeContextOptions = {
  currentTheme: '',
  toggleTheme: () => {}
}

export const ThemeContext = createContext(defultContext);


export const ThemeWrapper = ({ children }: ThemeOptions) => {
  const [currentTheme, setToggleTheme] = useState('light');
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setToggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }} >
      <ThemeProvider theme={theme}>
        <AppRoot />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
