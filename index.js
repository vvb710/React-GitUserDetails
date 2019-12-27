import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import UserName from "./UserName";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from './Details';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userNames: [],
      searchText: ""
    };
  }

  search() {
    const url = `https://api.github.com/search/users?q=`;
    console.log(`${url}${this.state.searchText}`);

    fetch(`${url}${this.state.searchText}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ userNames: items });
      });
  }

  render() {
    return (
      <div className="Global">
        <div>
          <input
            type="text"
            onChange={e => {
              this.setState({ searchText: e.target.value });
            }}
            onKeyPress={e => {
              if (e.key == "Enter") {
                this.search();
              }
            }}
          />
          <button onClick={() => this.search()}> SEARCH </button>
        </div>

        {this.state.userNames &&
          this.state.userNames.map((results, index) => (
            <UserName key={index} userName={results} />
          ))}
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
