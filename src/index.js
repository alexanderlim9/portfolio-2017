import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
