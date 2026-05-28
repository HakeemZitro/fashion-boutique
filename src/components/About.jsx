import styles from './About.module.css';

function About({ image, label, title, accentText, description, signature }) {
  return (
    <section className={styles.about} id="about">
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