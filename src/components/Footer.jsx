import styles from '../../blocks/Footer.module.css';

function Footer({ logo, description, navLinks, socialLinks, copyright, legalLinks }) {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__top']}>
          <div className={styles['footer__brand']}>
            <h3 className={styles['footer__logo']}>{logo}</h3>
            <p className={styles['footer__description']}>{description}</p>
          </div>

          <nav className={styles.footer__nav}>
            <div className={styles['footer__nav-column']}>
              <h4>Explore</h4>
              <ul className={styles['footer__nav-list']}>
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles['footer__nav-link']}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles['footer__nav-column']}>
              <h4>Connect</h4>
              <ul className={styles['footer__nav-list']}>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles['footer__nav-link']}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className={styles['footer__social']}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles['footer__social-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles['footer__bottom']}>
          <p className={styles['footer__copyright']}>{copyright}</p>
          <div className={styles.footer__legal}>
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles['footer__legal-link']}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;