import React, { useContext, useState } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from '../../portfolio';
import '../../styles/Navbar.css';

interface ThemeContextType {
  themeName: string;
  toggleTheme: () => void;
}

const Navbar: React.FC = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext) as [ThemeContextType];
  const [showNavList, setShowNavList] = useState<boolean>(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : undefined }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a href='#intro' onClick={toggleNavList} className='link link--nav'>
            About
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#experience' onClick={toggleNavList} className='link link--nav'>
            Experience
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#research' onClick={toggleNavList} className='link link--nav'>
            Papers
          </a>
        </li>
        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}
        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
        <li className='nav__list-item'>
          <a href='#map' onClick={toggleNavList} className='link link--nav'>
            Map
          </a>
        </li>
      </ul>
      
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;