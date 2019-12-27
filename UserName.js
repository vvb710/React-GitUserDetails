import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./Details";
import App from "./index";

class UserName extends Component {
  state = {
    isDetailsVisible: false
  };

  onNameClick = () => {
    this.setState({ isDetailsVisible: !this.state.isDetailsVisible });
  };

  render() {
    let result = this.props.userName;
    let { login, id, score, url, avatar_url } = result;

    return (
      <div className="main">
        <img className="avatar-img" src={avatar_url} alt="avatar" />
        {/*<li>
          <Link to={`/details/${id}`} className="nav-link">
            About
          </Link>
        </li>*/}
        <li onClick={this.onNameClick}>{result.login}</li>
        {this.state.isDetailsVisible && (
          <div>
            <p>Score:{score}</p>
            <p>Id:{id}</p>
            <p>URL:{url}</p>
          </div>
        )}

       {/* <Switch>
          <Route exact path="/" component={App} />
          <Route path="/details/:id" component={Details} />
        </Switch>*/}
      </div>
    );
  }
}
export default UserName;
