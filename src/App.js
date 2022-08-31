import React, { Component } from "react";
//import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./components/Character";

class App extends Component {
  state = {};

  async componentDidMount() {
    const apiData = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
    );

    this.setState({ apiData: apiData.data });
    console.log(this.state.apiData);
  }
  render() {
    if (this.state.apiData) {
      console.log("map called");
      return (
        <>
          {this.state.apiData.map((character) => {
            return <Character character={character} />;
          })}
        </>
      );
    }
    return <h1>Loading.....</h1>;
  }
}
export default App;
