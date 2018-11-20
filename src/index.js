import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/routes';
import * as serviceWorker from '~/utils/serviceWorker';
import { init, collectResource } from '@enos/dpl/lib/locale/localeUtils';

// import style css
import '~/assets/css/style.scss';

init(collectResource(require.context('./locale', false, /\.js$/)));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
