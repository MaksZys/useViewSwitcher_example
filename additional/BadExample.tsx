import {useViewSwitcher} from 'hooks/viewSwitcherHooks/useViewSwitcher/useViewSwitcher';
import {RegisteredBy, RegisterViewID} from '../hooks/viewSwitcherHooks/RegisteredConsts';

import useStyles from 'styles';

const BAD_Example = () => {
  const { viewState, registerComponent, showView } = useViewSwitcher(RegisterViewID.Base);
  const styles = useStyles();

  const wrongExample = () => (
    <div className={styles.container}>
      It will cause troubles
    </div>
  )

  const handleRegister = () => {
    if (viewState?.registeredBy !== RegisteredBy.BAD_Example) {
      registerComponent(() => wrongExample(), RegisteredBy.BAD_Example);
    }
    showView();
  }

  return (
    <button onClick={handleRegister}>
      Click to register component
    </button>
  )
}
