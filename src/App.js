import React, { Component } from "react";
import "./style.css";
import Perfil from "./Perfil";

const perfilInfo = {
  author: {
    name: "Rickz",
    avatarURL:
      "https://cdn.discordapp.com/avatars/686766483350880351/8d96b1ded06f63b4907c3194482c1b85.png"
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
