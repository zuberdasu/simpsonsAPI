import React, { Component } from "react";
class Like extends Component {
  render() {
    return (
      <button onClick={() => this.props.onLike(this.props.id)}>
        {this.props.liked ? "Dislike" : "Like"}
      </button>
    );
  }
}

export default Like;
