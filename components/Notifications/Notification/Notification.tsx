import styles from './Notification.module.css';

type NotificationProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

export const Notification = ({ image, title, description }: NotificationProps) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    <img src={image.src} alt={image.alt} className={styles.image}/>
  </div>
);

