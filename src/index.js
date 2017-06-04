import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Splash from './splash';
import Abstract from './abstract';
import Work from './work';
import Project from './project';
import About from './about';
import Resume from './resume';
import Contact from './contact';



import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Splash />, document.getElementById('splash'));
ReactDOM.render(<Work />, document.getElementById('work'));
// ReactDOM.render(<Project />, document.getElementById('project'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Resume />, document.getElementById('resume'));
ReactDOM.render(<Contact />, document.getElementById('contact'));



registerServiceWorker();

