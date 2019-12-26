import App from 'next/app';
import Router from 'next/router';
import { appWithTranslation } from '../i18n';

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

// export default App;

export default appWithTranslation(App);
