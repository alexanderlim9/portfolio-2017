import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './app';
import About from './about';
import Resume from './resume';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <BrowserRouter basename="/portfolio">
    <div>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/resume" component={Resume}/>
    </div>
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();

