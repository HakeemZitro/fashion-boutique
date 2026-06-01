import { useState } from 'react';
import styles from '../../blocks/Gallery.module.css';

function Gallery({ label, title, items, className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={`${styles.gallery} ${className}`} id="gallery">
      <div className={styles.gallery__header}>
        <p className={styles.gallery__label}>{label}</p>
        <h2 className={styles.gallery__title}>{title}</h2>
      </div>

      <div className={styles.gallery__grid}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.gallery__item} fadeUpGallery`}
            style={{ '--index': index }}
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