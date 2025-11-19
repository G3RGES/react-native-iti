import { createContext, useState } from 'react';

export const theme = createContext();

// export var ThemeProvider= theme.Provider

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return <theme.Provider value={{ isDark, setIsDark }}>{children}</theme.Provider>;
}
