import { useState, useEffect, useRef } from 'react';
import styles from './Collections.module.css';

function Collections({ label, title, collections }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    collections.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]);
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [collections.length]);

  return (
    <section className={styles.collections}>
      <div className={styles.collections__header}>
        <p className={styles.collections__label}>{label}</p>
        <h2 className={styles.collections__title}>{title}</h2>
      </div>

      <div className={styles.collections__grid}>
        {collections.map((collection, index) => (
          <article
            key={collection.id}
            ref={el => cardRefs.current[index] = el}
            className={`${styles['collection-card']} ${visibleCards.includes(index) ? styles['is-visible'] : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={styles['collection-card__image-container']}>
              <img
                src={collection.image}
                alt={collection.name}
                className={styles['collection-card__image']}
              />
            </div>
            <div className={styles['collection-card__overlay']}>
              <span className={styles['collection-card__year']}>{collection.year}</span>
              <h3 className={styles['collection-card__name']}>{collection.name}</h3>
              <p className={styles['collection-card__description']}>{collection.description}</p>
            </div>
            <div className={styles['collection-card__border']} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Collections;