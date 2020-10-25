import React, { Component } from "react";
import "../style.css";

class Avatar extends Component {
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.user.avatarURL}
        alt={this.props.user.name}
      />
    );
  }
}

export default Avatar;
