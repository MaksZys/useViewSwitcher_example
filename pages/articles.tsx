import {NewsSection} from 'components/NewsSection/NewsSection';

import {Base} from '../components/Base/Base';
import {ARTICLES} from 'consts';

import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.background}>
      <Base>
        <NewsSection title="Classic Articles">
          {ARTICLES.map(el => <NewsSection.Article  {...el} />)}
        </NewsSection>
      </Base>
    </div>
  );
}
