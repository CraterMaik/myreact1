import React, { Component } from "react";
import "../style.css";

class Username extends Component {
  render() {
    return <div className="UserInfo-name">{this.props.name}</div>;
  }
}

export default Username;
