import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Splash from './splash';
import Abstract from './abstract';
import Work from './work';
import Project from './project';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Splash />, document.getElementById('splash'));
ReactDOM.render(<Work />, document.getElementById('work'));
// ReactDOM.render(<Project />, document.getElementById('project'));


registerServiceWorker();

