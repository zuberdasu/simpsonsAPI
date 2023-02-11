import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";
import Like from "./Like";
import Delete from "./Delete";

class Character extends Component {
  render() {
    const { character, quote, image, id, liked } = this.props.character; //deconstruct object

    return (
      <div className={"character " + (liked ? "liked" : "not_liked")}>
        <Name name={character} />

        <Image image={image} />

        <Quote quote={quote} />
        <div className="buttons">
          <Like onLike={this.props.onLike} id={id} liked={liked} />
          <Delete onDelete={this.props.onDelete} id={id} />
        </div>
      </div>
    );
  }
}

export default Character;
