import styles from '../../blocks/Philosophy.module.css';

function Philosophy({ quote, signature, className = '' }) {
  return (
    <section className={`${styles.philosophy} fadeScale ${className}`}>
      <div className={styles.philosophy__content}>
        <blockquote className={styles['philosophy__quote']}>{quote}</blockquote>
        <p className={styles['philosophy__signature']}>{signature}</p>
        <div className={styles['philosophy__divider']} />
      </div>
    </section>
  );
}

export default Philosophy;