import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";
import { API_KEY, API_SECRET } from './Keys'


const petfinder = pf({
  key: API_KEY,
  secret: API_SECRET
});

class App extends React.Component {
  render() {
    return (
      <div>
        {console.log(API_KEY)}
        <h1>Adopt Me</h1>
        <Pet name="Ricky" animal="Dog" breed="GSD" />
        <Pet name="Katrina" animal="Dog" breed="GSD" />
        <Pet name="Tango" animal="Dog" breed="Golden Retreiver" />
      </div>
      )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
