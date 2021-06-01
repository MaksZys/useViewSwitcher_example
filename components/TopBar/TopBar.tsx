import clsx from 'clsx';
import {Notifications} from 'components/Notifications/Notifications';

import {RegisteredBy, RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import {useViewSwitcher} from 'hooks/viewSwitcherHooks/useViewSwitcher/useViewSwitcher';
import {BiDotsVertical} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdNotifications, MdSearch} from 'react-icons/md';

import styles from './TopBar.module.css';

export const TopBar = () => {
  const { viewState, registerComponent, toggleView } = useViewSwitcher(RegisterViewID.Base);

  const handleDefaultClick = () => window.alert('Don\'t bother me I am only a mock here!');

  const handleNotificationClick = () => {
    if (viewState?.registeredBy !== RegisteredBy.TopBar) {
      registerComponent(() => <Notifications />, RegisteredBy.TopBar);
    }
    toggleView();
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <button
          className={clsx(styles.buttonStyles, styles.hamburger)}
          onClick={handleDefaultClick}
        >
          <GiHamburgerMenu size={20} className={styles.grayIcon}/>
        </button>
        <span className={styles.titleText}>Hello Ben!</span>
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.buttonStyles} onClick={handleDefaultClick}>
          <MdSearch size={20} className={styles.grayIcon}/>
        </button>
        <button className={styles.buttonStyles} onClick={handleNotificationClick}>
          <MdNotifications size={20} className={clsx(styles.grayIcon, styles.colorChange)}/>
        </button>
        <button className={styles.buttonStyles} onClick={handleDefaultClick}>
          <BiDotsVertical size={20} className={styles.grayIcon}/>
        </button>
      </div>
    </div>
  );
};
