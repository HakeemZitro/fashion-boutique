import styles from './Gallery.module.css';

function Gallery({ label, title, items }) {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__header}>
        <p className={styles.gallery__label}>{label}</p>
        <h2 className={styles.gallery__title}>{title}</h2>
      </div>

      <div className={styles.gallery__grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.gallery__item}>
            <img src={item.src} alt={item.alt} className={styles.gallery__image} />
            <div className={styles['gallery__item-overlay']}>
              <div className={styles['gallery__item-icon']}>+</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;