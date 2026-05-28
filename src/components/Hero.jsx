import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

function Hero({ subtitle, title, tagline, images }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles['hero__slide']} ${index === activeSlide ? styles['hero__slide--active'] : ''}`}
          >
            <img
              src={img}
              alt=""
              className={styles['hero__slide-image']}
            />
          </div>
        ))}
      </div>

      <div className={styles.hero__overlay} />

      <div className={styles.hero__content}>
        <p className={styles.hero__subtitle}>{subtitle}</p>
        <h1 className={styles.hero__title}>{title}</h1>
        <p className={styles.hero__tagline}>{tagline}</p>
      </div>

      <div className={styles['hero__scroll-indicator']} onClick={scrollToContent}>
        <span className={styles['hero__scroll-text']}>Discover</span>
        <div className={styles['hero__scroll-line']} />
      </div>
    </section>
  );
}

export default Hero;