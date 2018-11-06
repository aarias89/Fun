import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";
import { API_KEY, API_SECRET } from './Keys'

const petfinder = pf({
  key: API_KEY,
  secret: API_SECRET
});

class App extends React.Component {

  componentDidMount() {
    const promise = petfinder.breed.list( {animal: "dog"})

    promise.then(console.log, console.error)
  }

  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Ricky" animal="Dog" breed="GSD" />
        <Pet name="Katrina" animal="Dog" breed="GSD" />
        <Pet name="Tango" animal="Dog" breed="Golden Retreiver" />
      </div>
      )
  }
}

render(React.createElement(App), document.getElementById("root"));
