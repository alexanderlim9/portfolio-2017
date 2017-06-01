import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Splash from './splash';
import Abstract from './abstract';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Splash />, document.getElementById('splash'));
ReactDOM.render(<Abstract />, document.getElementById('abstract'));

registerServiceWorker();

