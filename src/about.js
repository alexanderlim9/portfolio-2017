import React, {Component} from 'react';
import './App.css';

class About extends Component {
  componentDidMount() {
    this.scrollToTop()
  }

  scrollToTop() {
    var i = 2;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i += (800 - i) / 100 + .5;
      if (i > 800) clearInterval(int);
    }, 1);
  }

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
              sense of it, but to communicate it as well.
            </p>
            <p className="copy">My multidisciplinary background in computer science, data science,
              and design allows me to approach problems differently. Empathy in design is one of my
              greatest values. I believe that building anything without considering your user is
              effort gone to waste.
            </p>
          </div>
        </div>
        {/*<div className="row">*/}
          {/*<div className="col-xs-8 bio">*/}
            {/*<div id="bio-personal">*/}
              {/*<p className="copy">There are many things that define me as an individual. I'm proud*/}
                {/*of my identity as both an Asian-American and as a member of the LGBTQ+*/}
                {/*community. As such, I value diversity and inclusivity in the workplace and beyond.*/}
              {/*</p>*/}
              {/*<p className="copy">*/}
                {/*When I'm not sitting behind a screen, you can find me running around Boston*/}
                {/*Ask me how much I love trains, typography, or&nbsp;*/}
                {/*<a target="_blank" id="tesselate" href="https://soundcloud.com/alt-j/03-tessellate">*/}
                  {/*Tessellate</a> by Alt-j.*/}
              {/*</p>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default About;
