import styles from './Card.module.css';

type CardProps = {
  title: string;
  secondaryTitle: string;
  image: {
    src: string;
    alt: string;
  }
};

export const Card = ({ image, title, secondaryTitle }: CardProps) => (
  <article className={styles.container}>
    <img src={image.src} alt={image.alt} className={styles.top} />
    <div className={styles.bottom}>
      <h1>{title}</h1>
      <p>{secondaryTitle}</p>
    </div>
  </article>
);
