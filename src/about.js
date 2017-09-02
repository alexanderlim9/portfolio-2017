import React, {Component} from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              I'm a lot of things
            </h1>
            <p>and they each define who I am. </p>
          </div>
        </div>
        <div className="row bio">
          <div className="col-xs-4">
            <p>I'm a <u>student</u>,</p>
            <p className="bio-copy">I study Computer Science & Interaction Design at Northeastern
              University.</p>
          </div>
          <div className="col-xs-4">
            <p>I'm a <u>developer</u>,</p>
            <p className="bio-copy">I like solving problems through technology.</p>
          </div>
          <div className="col-xs-4">
            <p>I'm a <u>designer</u>,</p>
            <p className="bio-copy">I value the process required to reach solutions.</p>
          </div>
        </div>
        <div className="row bio-section">
          <div className="col-xs-12">
            {/*<p>*/}
              {/*But I can't separate any one part.*/}
              {/*<br/>*/}
              {/*I write code like a designer and I design from a developer's perspective.*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
