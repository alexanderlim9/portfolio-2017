import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import App from './app';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <HashRouter>
    <Route path="" component={App}/>
  </HashRouter>
), document.getElementById('app'));

registerServiceWorker();

