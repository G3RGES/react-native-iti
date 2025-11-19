import { createContext, useState } from 'react';

const theme = createContext();

export function ThemeContextProvider({ children }) {
  const [dark, setDark] = useState(false);

  return <theme.Provider value={{ dark, setDark }}>{children}</theme.Provider>;
}
