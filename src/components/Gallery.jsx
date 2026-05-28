import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

function Gallery({ label, title, items }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    items.forEach((item, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 100);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]);
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [items.length]);

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__header}>
        <p className={styles.gallery__label}>{label}</p>
        <h2 className={styles.gallery__title}>{title}</h2>
      </div>

      <div className={styles.gallery__grid}>
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={el => itemRefs.current[index] = el}
            className={`${styles.gallery__item} ${visibleItems.includes(index) ? styles['is-visible'] : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.src} alt={item.alt} className={styles.gallery__image} />
            <div
              className={styles['gallery__item-overlay']}
              style={{ opacity: hoveredIndex === index ? 1 : 0 }}
            >
              <div
                className={styles['gallery__item-icon']}
                style={{ transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.8)' }}
              >
                +
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;