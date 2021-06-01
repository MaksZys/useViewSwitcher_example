import styles from './Article.module.css';

type ArticleProps = {
  when: string;
  title: string;
  description: string;
}

export const Article = ({title, when, description}: ArticleProps) => (
  <article className={styles.container}>
    <p className={styles.time}>{when}</p>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </article>
);
