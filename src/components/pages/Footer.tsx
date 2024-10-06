import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => (
  <footer className='footer'>
    <button 
      className='footer__link' 
      onClick={() => window.location.href = 'https://www.linkedin.com/in/weibing-wang-w/'}
    >
      Weibing Wang all reserved @2024
    </button>
  </footer>
);

export default Footer;