import React, { Component } from "react";
import "../style.css";

class Joined extends Component {
  render() {
    return <div className="UserJoined">{this.props.joined}</div>;
  }
}

export default Joined;
