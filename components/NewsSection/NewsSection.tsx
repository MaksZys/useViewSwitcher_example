import clsx from 'clsx';
import {ReactNode} from 'react';
import {Article} from './Article/Article';

import {Card} from './Card/Card';

import styles from './NewsSection.module.css';

type NewsSectionProps = {
  title: string;
  children: ReactNode;
  scrollHorizontally?: boolean;
};

export const NewsSection = ({title, scrollHorizontally, children}: NewsSectionProps) => (
  <section className={styles.container}>
    <h1>{title}</h1>
    <div className={clsx(scrollHorizontally ? styles.verticalScroll : styles.horizontalScroll, styles.contentContainer)}>
      {children}
    </div>
  </section>
);

NewsSection.Card = Card;
NewsSection.Article = Article;
