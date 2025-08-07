import { useState, useEffect } from 'react';
import Navigate from '../Navigate/Navigate';

const Header = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-div">
          <div className="header-logo">
            <span>My React App</span>
          </div>
        </div>
      </header>
      <div className={`header-navigate ${fixed ? 'fixed' : ''}`}>
        <Navigate />
      </div>
    </>
  );
};

export default Header;
