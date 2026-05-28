import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

function Nav({ logoText, links, social }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles['nav--scrolled'] : ''}`}>
      <a href="/" className={styles.nav__logo}>
        {logoText}
      </a>

      <ul className={styles.nav__links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={styles.nav__link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.nav__social}>
        {social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles['nav__social-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;