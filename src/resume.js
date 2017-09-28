/**
 * Created by alex on 9/28/17.
 */
import React, {Component} from 'react';
import './App.css';

class Resume extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              This is my resume
            </h1>
            <p>with all sorts of things I've done.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <img id="resume-png" src={require("./resume-9-27-17.png")} alt="resume"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
