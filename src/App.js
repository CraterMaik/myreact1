import React, { Component } from "react";
import "./style.css";
import Perfil from "./Perfil";

const perfilInfo = {
  author: {
    name: "Rickz",
    avatarURL:
      "https://aux2.iconspalace.com/uploads/utilities-terminal-icon-256.png"
  },
  status: "Ausente",
  joined: new Date()
};

class App extends Component {
  render() {
    return (
      <div>
        <Perfil
          joined={perfilInfo.joined}
          status={perfilInfo.status}
          author={perfilInfo.author}
        />
      </div>
    );
  }
}

export default App;
