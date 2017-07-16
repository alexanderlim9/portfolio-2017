import React, {Component} from 'react';

import Nav from './nav';
import Splash from './splash';
import Work from './sections/work';
import About from './sections/about';
import Resume from './sections/resume';
import Contact from './sections/contact';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Splash />
        <Work />
        <About />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
