import {RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import { Dispatch, ReactElement } from 'react';

export enum ViewSwitcherActionType {
  SET_VIEW = 'switcher/set-view',
  TOGGLE_VIEW = 'switcher/toggle-view',
  HIDE_VIEW = 'switcher/hide-view',
  SHOW_VIEW = 'switcher/show-view',
}

type ComponentType = null | (() => ReactElement);

export type ViewSwitcherActionRecord<RegisterBy, RegisterID> = {
  type: ViewSwitcherActionType.SET_VIEW;
  id: RegisterID;
  registeredBy: RegisterBy;
  component: ComponentType;
};

export type ViewSwitcherAction<RegisterBy, RegisterID> =
  | ViewSwitcherActionRecord<RegisterBy, RegisterID>
  | {
      type: ViewSwitcherActionType.HIDE_VIEW | ViewSwitcherActionType.SHOW_VIEW | ViewSwitcherActionType.TOGGLE_VIEW;
      id: RegisterID;
    };

export type ViewSwitcherRecord<RegisterBy> = {
  isVisible: boolean;
  component?: ComponentType;
  registeredBy: RegisterBy;
};

export type ViewsRecords<RegisterBy> = Record<RegisterViewID, ViewSwitcherRecord<RegisterBy>>

export type ViewSwitcherStateContextType<RegisterBy, RegisterID> = { readonly views: ViewsRecords<RegisterBy>};

export type ViewSwitcherDispatchContextType<RegisterBy, RegisterID> = Dispatch<ViewSwitcherAction<RegisterBy, RegisterID>>;

export type ViewSwitcherReducerType<RegisterBy, RegisterID> = (state: ViewSwitcherStateContextType<RegisterBy, RegisterID>, action: ViewSwitcherAction<RegisterBy, RegisterID>) => ViewSwitcherStateContextType<RegisterBy, RegisterID>;

export type ViewSwitcherReducerActionsObj<RegisterBy, RegisterID> = Record<ViewSwitcherActionType, () => ViewSwitcherStateContextType<RegisterBy, RegisterID>>;
