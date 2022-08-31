import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    console.log(`${this.props.name}`);
    return (
      <>
        <h7>{this.props.name}</h7>
      </>
    );
  }
}

export default Name;
