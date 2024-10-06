import React from 'react';
import { header } from '../../portfolio';
import Navbar from './Navbar';
import '../../styles/Header.css';

interface HeaderData {
  homepage?: string;
  title: string;
}

const Header: React.FC = () => {
  const { homepage, title }: HeaderData = header;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
