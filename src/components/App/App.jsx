import React, { Component } from "react";
import Header from "../Header/Header";
import HeroForm from "../HeroForm/HeroForm";
import HeroInfo from "../HeroInfo/HeroInfo";

// https://gateway.marvel.com/v1/public/characters

class App extends Component {
  state = {
    heroName: "",
  };

  getName = (heroName) => {
    this.setState({ heroName });
  };

  render() {
    const { heroName } = this.state;

    return (
      <main>
        <Header />
        <HeroForm onSubmit={this.getName} />
        <HeroInfo heroName={heroName} />
      </main>
    );
  }
}

export default App;
