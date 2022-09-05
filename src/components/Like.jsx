import React, { Component } from "react";
//state of like button has been raised to App component, hence property liked comes down as an attribute
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
