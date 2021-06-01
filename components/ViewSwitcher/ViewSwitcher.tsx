import {ReactElement} from 'react';

import {RegisterViewID} from 'hooks/viewSwitcherHooks/RegisteredConsts';
import {useViewSwitcher} from 'hooks/viewSwitcherHooks/useViewSwitcher/useViewSwitcher';

type ViewSwitcherProps = {
  id: RegisterViewID;
  children: ReactElement | ReactElement[];
};

export const ViewSwitcher = ({id, children}: ViewSwitcherProps) => {
  const {viewState} = useViewSwitcher(id);

  if (viewState?.isVisible && viewState?.component) {
    return viewState.component();
  }

  return <>{children}</>;
};
