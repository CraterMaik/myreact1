import React, { Component } from "react";
import "./style.css";
import Avatar from "./Perfil/Avatar";
import Username from "./Perfil/Username";
import Status from "./Perfil/Status";
import Joined from "./Perfil/Joined";

function formatDate(date) {
  return date.toLocaleDateString();
}

class Perfil extends Component {
  render() {
    return (
      <div className="Perfil">
      
        <div className="UserInfo">
          <Avatar user={this.props.author} />
          <Username name={this.props.author.name} />
        </div>

        <Status status={this.props.status} />
        <Joined joined={formatDate(this.props.joined)} />

      </div>
    );
  }
}

export default Perfil;
