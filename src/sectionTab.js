import React, {Component} from 'react';
import './App.css';

class SectionTab extends Component {
  render() {
    let style = {
      'background-color': this.props.color
    }
    return (
      <div className="sectionTab">
        <h1 className="section-name">{this.props.title}</h1>
        <div className="tab" style={style}></div>
      </div>
    );
  }
}

SectionTab.defaultProps = {
  title: 'Title',
  color: '#777'
}

export default SectionTab;
