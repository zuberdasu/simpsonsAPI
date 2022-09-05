import React, { Component } from "react";
import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.searchInput = React.createRef(); //create ref to make input box controlled component
  }
  state = { searchInput: "" };

  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      //give each element id to uniquely identify
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

    //check if ref is present before giving input box focus
    if (this.state.apiData) {
      this.searchInput.current.focus();
    }
  }

  //Callback function to deal with user clicking like button
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

  //Callback function to deal with user pressing delete button
  onDelete = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    apiData.splice(index, 1);

    this.setState({ apiData });
  };

  //Function to take user input and record in state
  onInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { apiData } = this.state;

    if (apiData === undefined) {
      return <h1>Loading.....</h1>;
    }

    //Count up how many characters hold like state
    let total = 0;
    apiData.forEach((item) => {
      if (item.liked === true) {
        total += 1;
      }
    });

    // filter out according to search criteria before rendering
    let filtered = [...apiData];

    filtered = filtered.filter((character) => {
      return character.character
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
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
        {filtered.map((character) => {
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
