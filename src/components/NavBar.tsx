"use client";

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const nextTheme = storedTheme ?? preferredTheme;
    root.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);

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

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
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
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </button>
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