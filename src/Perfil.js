import React, { Component } from "react";
import "./style.css";

function formatDate(date) {
  return date.toLocaleDateString();
}

class Perfil extends Component {
  render() {
    return (
      <div className="Perfil">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarURL}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">{this.props.author.name}</div>
        </div>
        <div className="UserStatus">{this.props.status}</div>
        <div className="UserJoined">{formatDate(this.props.joined)}</div>
      </div>
    );
  }
}

export default Perfil;
