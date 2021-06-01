import { useContext } from 'react';

import { ViewSwitcherDispatchContextType } from 'contexts/viewSwitcher/viewSwitcherContext/ViewSwitcherContext.types';
import { ViewSwitcherDispatchContext } from 'contexts/viewSwitcher/viewSwitcherContext/ViewSwitcherContext';
import {RegisteredBy, RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';

type UseViewSwitcherDispatchType = () => ViewSwitcherDispatchContextType<RegisteredBy, RegisterViewID>;

export const useViewSwitcherDispatch: UseViewSwitcherDispatchType = () => {
  const context = useContext(ViewSwitcherDispatchContext);

  if (context === undefined) {
    throw new Error('useViewSwitcherDispatch must be used within an ViewSwitcherContextController');
  }

  return context;
};
