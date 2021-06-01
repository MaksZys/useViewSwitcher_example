import {NewsSection} from 'components/NewsSection/NewsSection';
import {CARDS, ARTICLES} from 'consts';

import styles from '../styles/Home.module.css';
import {Base} from '../components/Base/Base';


export default function Home() {
  return (
    <div className={styles.background}>
      <Base>
        <NewsSection scrollHorizontally title="Cards Articles">
          {CARDS.map(el => <NewsSection.Card {...el} />)}
        </NewsSection>
        <NewsSection title="Classic Articles">
          {ARTICLES.map(el => <NewsSection.Article  {...el} />)}
        </NewsSection>
      </Base>
    </div>
  );
}
