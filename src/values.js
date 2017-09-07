/**
 * Created by alex on 9/6/17.
 */
import React, {Component} from 'react';
import './App.css';

class Values extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              Empathy & Accessibility
            </h1>
            <p>
              drive effective user experiences.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>
              If you don't consider your audience, you run the risk of building something useless.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-7">
            <p className="copy">
              To put yourself in their shoes is one thing, but to put yourself in
              <i> all</i> of their shoes is another—if you only consider half your audience, your
              job is only half complete.
            </p>
            <p className="copy">
              I'm passionate about empathizing with the user, understanding what their needs are and
              reaching solutions to meet their requirements.
            </p>
            <p className="copy">
              My own focus while building this site is to create a dialogue between the interface and the
              user, I think it's a natural and personable way of forming a human connection.
            </p>
            <p className="copy">
              I'm most interested in UI/UX/Interaction Design (IxD) as well as data visualization.
              There's so much information out there, I see a need to ensure that those who seek it
              can access it and understand it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Values;
