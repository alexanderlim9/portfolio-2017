import React, {Component} from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div className="row">
          <div className="col-xs-4">
            <img id="headshot" src={require("./headshot.jpg")} alt="headshot"/>
          </div>
          <div className="col-xs-8 bio">
            <h1>
              About me
            </h1>
            <p className="copy">
              My name is Alex, I'm a developer/designer studying Computer Science & Interaction
              Design at Northeastern University.
            </p>
            <p className="copy">
              I'm passionate about making information accessible and currently stepping into the
              field of data science. There's so much data out there, it's important not only to make
              sense of it, but also to communicate it as well.
            </p>
            <p className="copy">My multidisciplinary background in computer science, data science,
              and design allows me to approach problems differently. Empathy is design is one of my
              greatest values. I believe that building anything without considering your user is
              effort gone to waste.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
