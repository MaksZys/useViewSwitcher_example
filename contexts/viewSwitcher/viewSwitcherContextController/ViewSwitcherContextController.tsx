import React, {ReactNode, useReducer} from 'react';

import {ViewSwitcherDispatchContext, ViewSwitcherStateContext} from '../viewSwitcherContext/ViewSwitcherContext';
import {viewSwitcherReducer} from './viewSwitcherReducer/viewSwitcherReducer';
import {ViewsRecords} from '../viewSwitcherContext/ViewSwitcherContext.types';
import {RegisteredBy} from 'hooks/viewSwitcherHooks/RegisteredConsts';

export const ViewSwitcherContextController = ({children}: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(viewSwitcherReducer, {views: {} as ViewsRecords<RegisteredBy>});

  return (
    <ViewSwitcherStateContext.Provider value={state}>
      <ViewSwitcherDispatchContext.Provider value={dispatch}>{children}</ViewSwitcherDispatchContext.Provider>
    </ViewSwitcherStateContext.Provider>
  );
};
