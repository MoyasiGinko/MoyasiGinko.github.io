"use client";

import { useEffect, useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (scrollPercentage >= 2) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${open ? 'nav-open' : ''} ${scroll ? 'scrolled' : ''}`}>
        <div className="tophead">
          <h1>
            <a className="name-logo" href="#home" onClick={closeMenu}>
              moyasi.
            </a>
            <span className="blink" />
          </h1>
          <button
            type="button"
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {open ? '×' : '☰'}
          </button>
        </div>
        <ul className={`menu ${open ? 'open' : ''}`}>
          <li>
            <a href="#home" onClick={closeMenu}>home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>about</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>projects</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>contact</a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
};

export default NavBar;