import React, { Component } from "react";

class Details extends Component {
  render() {
    console.log(this.props.location.state.result);
    let result = this.props.location.state;
    console.log(result);

    let { login, id, score, url, avatar_url } = result;
    return (
      <div className="main">
        <img className="avatar-img" src={avatar_url} alt="avatar" />
        <div>
          <p>Name:{login}</p>
          <p>Score:{score}</p>
          <p>Id:{id}</p>
          <p>URL:{url}</p>
        </div>
      </div>
    );
  }
}
export default Details;
