import React, { Component } from "react";
import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.searchInput = React.createRef();
  }
  state = { searchInput: "" };

  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      apiData.data.forEach((element, index) => {
        element.id = index;
      });

      this.setState({ apiData: apiData.data });
    } catch (error) {
      Simpsons.forEach((element, index) => {
        element.id = index;
      });
      this.setState({ apiData: Simpsons });
    }
    console.log(this.searchInput.current);
    this.searchInput.current.focus();
    console.log(this.state.apiData);
  }

  onLike = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];

    //toggle like even if it starts at undefined
    if (apiData[index].liked === true) {
      apiData[index].liked = false;
    } else {
      apiData[index].liked = true;
    }

    this.setState({ apiData });
  };

  onDelete = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    apiData.splice(index, 1);

    this.setState({ apiData });
  };

  onInput = (e) => {
    console.log("onInput", e.target.value);
    this.setState({ searchInput: e.target.value });
  };
  render() {
    const { apiData } = this.state;

    if (apiData === undefined) {
      return <h1>Loading.....</h1>;
    }

    let total = 0;
    apiData.forEach((item) => {
      if (item.liked === true) {
        total += 1;
      }
    });

    return (
      <>
        <input
          ref={this.searchInput}
          value={this.state.searchInput}
          onInput={this.onInput}
          type="text"
        ></input>
        <h1>Total liked: {total}</h1>
        {this.state.apiData.map((character) => {
          return (
            <Character
              character={character}
              onLike={this.onLike}
              onDelete={this.onDelete}
              key={character.id}
            />
          );
        })}
      </>
    );
  }
}
export default App;
