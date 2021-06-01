import useStyles from 'styles';

const ComponentToRegister = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      It will work fine
    </div>
  )
}

import {useViewSwitcher} from 'hooks/viewSwitcherHooks/useViewSwitcher/useViewSwitcher';
import {RegisteredBy, RegisterViewID} from '../hooks/viewSwitcherHooks/RegisteredConsts';

const GoodExample = () => {
  const { viewState, registerComponent, showView } = useViewSwitcher(RegisterViewID.Base);

  const handleRegister = () => {
    if (viewState?.registeredBy !== RegisteredBy.GoodExaple) {
      registerComponent(() => ComponentToRegister(), RegisteredBy.GoodExaple);
    }
    showView();
  }

  return (
    <button onClick={handleRegister}>
      Click to register component
    </button>
  )
}
