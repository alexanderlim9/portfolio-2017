import React, {Component} from 'react';
import './App.css';

import ProjectNav from './projectNav';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <div className="text">
                <h1>Title of Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <ProjectNav/>
            </div>
            <div className="col-xs-7 col-xs-offset-1">
              <img src={require('./wireframe_box.png')}/>
              <img src={require('./wireframe_box.png')}/>
              <img src={require('./wireframe_box.png')}/>
              <img src={require('./wireframe_box.png')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
