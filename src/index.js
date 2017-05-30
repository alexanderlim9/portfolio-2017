import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Splash from './splash';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Splash />, document.getElementById('splash'));

registerServiceWorker();

