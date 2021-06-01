import { Notification } from './Notification/Notification'
import {RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import {useViewSwitcher} from 'hooks/viewSwitcherHooks/useViewSwitcher/useViewSwitcher';

const NOTIFICATIONS = [
  {
    image: {
      src: '/assets/author.jpg',
      alt: 'Author profile picture',
    },
    title: 'New article',
    description: 'Author you following publicated new article',
  },
  {
    image: {
      src: '/assets/author.jpg',
      alt: 'Author profile picture',
    },
    title: 'New article',
    description: 'Author you following publicated new article',
  },
  {
    image: {
      src: '/assets/author.jpg',
      alt: 'Author profile picture',
    },
    title: 'New article',
    description: 'Author you following publicated new article',
  },
];

import styles from './Notifications.module.css';

export const Notifications = () => {
  const {hideView} = useViewSwitcher(RegisterViewID.Base);

  return (
    <div className={styles.container}>
      {NOTIFICATIONS.map(el => <Notification {...el} />)}
      <button onClick={hideView} className={styles.closeButton}>Click To Close</button>
    </div>
  );
};
