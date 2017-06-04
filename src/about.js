import React, {Component} from 'react';
import './App.css';

import SectionTab from "./sectionTab";

class About extends Component {
  render() {
    return (
      <div className="about">
        <SectionTab title="About" color="#FF9300"/>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <img src={require('./wireframe_box.png')}/>
              <img src={require('./wireframe_box.png')}/>
              <img src={require('./wireframe_box.png')}/>

            </div>
            <div className="col-xs-4 col-xs-offset-1">
              <div id="bio">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
