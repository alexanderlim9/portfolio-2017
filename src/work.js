import React, {Component} from 'react';
import './App.css';

import Abstract from './abstract';

class Work extends Component {
  render() {
    return (
      <div className="container work">
        <div className="row">
          <Abstract title="100 Years of Movies"
                    type="Data Vis"
                    blurb="A visualization of 100 years of movie ratings."/>
          <Abstract/>
        </div>
        <div className="row">
          <Abstract/>
          <Abstract/>
        </div>
      </div>
    );
  }
}

export default Work;
