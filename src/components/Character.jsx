import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";

class Character extends Component {
  state = {};
  render() {
    //console.log(`Character called with ${this.props.character.character} `);
    return (
      <>
        <Name name={this.props.character.character} />

        <Image image={this.props.character.image} />

        <Quote quote={this.props.character.quote} />
      </>
    );
  }
}

export default Character;
