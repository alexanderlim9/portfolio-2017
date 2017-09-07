import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './app';
import About from './about';
import Values from './values';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <BrowserRouter basename="/">
    <div>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/values" component={Values}/>
    </div>
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();

