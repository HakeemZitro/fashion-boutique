import { useState } from 'react';
import styles from './Contact.module.css';

function Contact({ label, title, text, email }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles['contact__container']}>
        <div className={styles.contact__info}>
          <p className={styles['contact__label']}>{label}</p>
          <h2 className={styles.contact__title}>{title}</h2>
          <p className={styles.contact__text}>{text}</p>
          <a href={`mailto:${email}`} className={styles['contact__email']}>
            {email}
          </a>
        </div>

        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles['contact__input']}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles['contact__input']}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles['contact__textarea']}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles['contact__button']}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;