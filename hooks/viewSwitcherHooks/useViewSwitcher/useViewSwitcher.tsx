import React, {ReactElement, useContext} from 'react';
import throttle from 'lodash.throttle';

import {
  ViewsRecords,
  ViewSwitcherActionType,
} from 'contexts/viewSwitcher/viewSwitcherContext/ViewSwitcherContext.types';
import {ViewSwitcherStateContext} from 'contexts/viewSwitcher/viewSwitcherContext/ViewSwitcherContext';
import {RegisteredBy, RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import {useViewSwitcherDispatch} from 'hooks/viewSwitcherHooks/useViewSwitcherDispatch/useViewSwitcherDispatch';

export type RegisterComponent = (component: (() => ReactElement) | null, registeredBy: RegisteredBy) => void;

export const useViewSwitcher = (id: RegisterViewID) => {
  const viewSwitcherDispatch = useViewSwitcherDispatch();
  const viewSwitcherState = useContext(ViewSwitcherStateContext);

  if (viewSwitcherState === undefined) {
    throw new Error('ViewSwitcher context was not provided');
  }

  const selectedViewState = (viewSwitcherState.views as ViewsRecords<RegisteredBy>)?.[id];

  const registerComponent: RegisterComponent = (component, registeredBy) =>
    viewSwitcherDispatch({id, component, type: ViewSwitcherActionType.SET_VIEW, registeredBy});

  const toggleView = () => viewSwitcherDispatch({id, type: ViewSwitcherActionType.TOGGLE_VIEW});

  const showView = () => viewSwitcherDispatch({id, type: ViewSwitcherActionType.SHOW_VIEW});

  const hideView = () => viewSwitcherDispatch({id, type: ViewSwitcherActionType.HIDE_VIEW});

  return {
    registerComponent,
    showView: throttle(showView, 1000),
    hideView: throttle(hideView, 1000),
    toggleView: throttle(toggleView, 1000),
    viewState: selectedViewState,
  };
};
