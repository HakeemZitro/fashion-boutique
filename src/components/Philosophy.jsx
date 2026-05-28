import { useState, useEffect, useRef } from 'react';
import styles from './Philosophy.module.css';

function Philosophy({ quote, signature }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className={`${styles.philosophy} ${isVisible ? styles['is-visible'] : ''}`}>
      <div className={styles.philosophy__content}>
        <blockquote className={styles['philosophy__quote']}>{quote}</blockquote>
        <p className={styles['philosophy__signature']}>{signature}</p>
        <div className={styles['philosophy__divider']} />
      </div>
    </section>
  );
}

export default Philosophy;