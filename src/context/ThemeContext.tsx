import {
  type ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

type Theme = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  changeTheme: (_theme: Theme) => {}
});

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>(
    JSON.parse(localStorage.getItem('theme') as Theme) ?? 'dark'
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const changeTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const themeValue = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('ThemeContext has to be used within ThemeProvider!');
  }

  return context;
};

export { ThemeProvider, useThemeContext };
