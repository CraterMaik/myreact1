import React, { Component } from "react";
import "../style.css";

class Status extends Component {
  render() {
    return <div className="UserStatus">{this.props.status}</div>;
  }
}

export default Status;
