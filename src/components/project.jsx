import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div className={"Project " + this.props.side}>
        <div className="Project-img">
          <div className="Container">
            <img src={process.env.PUBLIC_URL + '/img/' + this.props.img + '.png'} alt={this.props.name} />
          </div>
        </div>
        <div className="Project-txt">
          <div className="Container">
            <h2 className="Project-txt-Title">{this.props.name}</h2>
            <span className="Project-txt-Subtitle">{this.props.desc}</span>
            <a
              href={this.props.link}
              rel="noopener noreferrer"
              target="_blank"
              className={"Button " + this.props.state}
              style={{ borderColor: this.props.color, color: this.props.color }}>
              {this.props.state} Project
            </a>
          </div>
        </div>
      </div>
    )
  }
}
