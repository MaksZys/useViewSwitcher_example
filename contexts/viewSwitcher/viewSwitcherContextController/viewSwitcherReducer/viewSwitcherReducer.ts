import {
  ViewSwitcherActionType,
  ViewSwitcherReducerActionsObj,
  ViewSwitcherReducerType,
} from '../../viewSwitcherContext/ViewSwitcherContext.types';
import {RegisteredBy, RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';


export const viewSwitcherReducer: ViewSwitcherReducerType<RegisteredBy, RegisterViewID> = (state, action) => {
  const actions: ViewSwitcherReducerActionsObj<RegisteredBy, RegisterViewID> = {
    [ViewSwitcherActionType.SET_VIEW]: () => {
      if (!('registeredBy' in action) || !action.registeredBy) {
        throw new Error('To set view switcher component correctly fill registeredBy field');
      }

      const updatedState = {...state};

      updatedState.views[action.id] = {
        isVisible: false,
        component: action.component,
        registeredBy: action.registeredBy,
      };

      return updatedState;
    },
    [ViewSwitcherActionType.HIDE_VIEW]: () => {
      const updatedState = {...state};

      updatedState.views[action.id] = {
        ...(updatedState.views[action.id] ?? {}),
        isVisible: false,
      };

      return updatedState;
    },
    [ViewSwitcherActionType.SHOW_VIEW]: () => {
      if (!state.views[action.id]?.component ?? true) {
        throw new Error('Component is not set');
      }

      const updatedState = {...state};
      updatedState.views[action.id].isVisible = true;

      return updatedState;
    },
    [ViewSwitcherActionType.TOGGLE_VIEW]: () => {
      if (!state.views[action.id]?.component ?? true) {
        throw new Error('Component is not set');
      }

      const updatedState = {...state};
      updatedState.views[action.id].isVisible = !updatedState.views[action.id].isVisible;

      return updatedState;
    },
  };

  if (!actions[action.type]) {
    throw new Error(`Unhandled action type: ${action.type}`);
  }

  return actions[action.type]();
};
