import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from './../context/ThemeContext';

const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  const { theme, changeTheme } = useThemeContext();

  return (
    <div className={`theme-wrapper ${theme}-theme`}>
      <button className='home-button'>
        <i>
          <Link to='/'>
            <HomeIcon fontSize='large' />
          </Link>
        </i>
      </button>
      <button className='theme-toggler' onClick={() => changeTheme(theme)}>
        <i>
          {theme === 'dark' ? (
            <LightModeIcon fontSize='large' />
          ) : (
            <DarkModeIcon fontSize='large' />
          )}
        </i>
      </button>
      {children}
    </div>
  );
};

export default ThemeWrapper;
