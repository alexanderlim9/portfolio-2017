import React, {Component} from 'react';
import './App.css';

import Abstract from './abstract';
import SectionTab from "./sectionTab";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <SectionTab/>
        <div className="container">
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
          <div className="row">
            <Abstract/>
            <Abstract/>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
