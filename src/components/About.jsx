import { useState, useEffect, useRef } from 'react';
import styles from './About.module.css';

function About({ image, label, title, accentText, description, signature }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.about} ${isVisible ? styles['is-visible'] : ''}`} id="about">
      <div className={styles['about__image-container']}>
        <img src={image} alt="Designer portrait" className={styles.about__image} />
        <div className={styles['about__image-frame']} />
      </div>

      <div className={styles.about__content}>
        <p className={styles.about__label}>{label}</p>
        <h2 className={styles.about__title}>
          {title} <span className={styles['about__title-accent']}>{accentText}</span>
        </h2>
        <p className={styles.about__text}>{description}</p>
        <p className={styles['about__signature']}>{signature}</p>
      </div>
    </section>
  );
}

export default About;