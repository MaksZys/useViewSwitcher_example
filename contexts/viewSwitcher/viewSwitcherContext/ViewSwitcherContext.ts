import { createContext } from 'react';

import { RegisteredBy, RegisterViewID } from 'hooks/viewSwitcherHooks/RegisteredConsts';

import { ViewSwitcherStateContextType, ViewSwitcherDispatchContextType } from './ViewSwitcherContext.types';

export const ViewSwitcherStateContext = createContext<ViewSwitcherStateContextType<RegisteredBy, RegisterViewID> | undefined>(undefined);
export const ViewSwitcherDispatchContext = createContext<ViewSwitcherDispatchContextType<RegisteredBy, RegisterViewID> | undefined>(undefined);
