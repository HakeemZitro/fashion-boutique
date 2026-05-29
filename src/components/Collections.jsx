import styles from '../../blocks/Collections.module.css';

function Collections({ label, title, collections, className = '' }) {
  return (
    <section className={`${styles.collections} ${className}`}>
      <div className={styles.collections__header}>
        <p className={styles.collections__label}>{label}</p>
        <h2 className={styles.collections__title}>{title}</h2>
      </div>

      <div className={styles.collections__grid}>
        {collections.map((collection, index) => (
          <article
            key={collection.id}
            className={`${styles['collection-card']} fadeUp`}
            style={{ '--index': index }}
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