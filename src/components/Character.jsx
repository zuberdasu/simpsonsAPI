import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";
import Like from "./Like";
import Delete from "./Delete";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.character; //deconstruct object

    //conditonal rendering so that character faces there quote
    if (characterDirection === "Left") {
      return (
        <div className={"character " + (liked ? "liked" : "not_liked")}>
          <Name name={character} />

          <Image image={image} />

          <Quote quote={quote} />
          <Like onLike={this.props.onLike} id={id} liked={liked} />
          <Delete onDelete={this.props.onDelete} id={id} />
        </div>
      );
    }
    return (
      <div className={"character " + (liked ? "liked" : "not_liked")}>
        <Name name={character} />
        <Quote quote={quote} />

        <Image image={image} />
        <Like onLike={this.props.onLike} id={id} liked={liked} />
        <Delete onDelete={this.props.onDelete} id={id} />
      </div>
    );
  }
}

export default Character;
