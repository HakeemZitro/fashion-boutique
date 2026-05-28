import { useInView } from '../hooks/useScrollAnimation';
import styles from './AnimatedSection.module.css';

function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.1
}) {
  const [ref, isInView] = useInView({ threshold, once: true });

  return (
    <div
      ref={ref}
      className={`${styles['animated-section']} ${styles[animation]} ${isInView ? styles['is-visible'] : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;