import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    console.log(`${this.props.quote}`);
    return (
      <>
        <h7>{this.props.quote}</h7>
      </>
    );
  }
}

export default Quote;
