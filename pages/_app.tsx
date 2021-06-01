import type { AppProps } from 'next/app';
import { ViewSwitcherContextController } from "../contexts/viewSwitcher/viewSwitcherContextController/ViewSwitcherContextController";

import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewSwitcherContextController>
      <Component {...pageProps} />
    </ViewSwitcherContextController>
  )
}

export default MyApp;
