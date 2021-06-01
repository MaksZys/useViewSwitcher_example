import {ReactNode} from 'react';

import {TopBar} from 'components/TopBar/TopBar';
import {RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import {ViewSwitcher} from 'components/ViewSwitcher/ViewSwitcher';

import styles from './Base.module.css';

type BaseProps = {
  children: ReactNode | ReactNode[];
}

export const Base = ({children}: BaseProps) => (
  <div className={styles.container}>
    <TopBar/>
    <ViewSwitcher id={RegisterViewID.Base}>
      <div className={styles.content}>
        {children}
      </div>
    </ViewSwitcher>
  </div>
);
