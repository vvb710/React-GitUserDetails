import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

class Details extends Component {
  render() {
    return <div className="main">abcd{this.props.match.id}</div>;
  }
}
export default Details;
