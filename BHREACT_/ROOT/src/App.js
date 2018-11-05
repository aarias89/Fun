import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";


// const petfinder = pf({
//   key: process.env.API_KEY,
//   secret: process.env.API_SECRET
// });

class App extends React.Component {
  render() {
    return (
      <div>
        {console.log(process.env.LOGNAME)}
        {console.log(process.env.DB)}
        <h1>Adopt Me</h1>
        <Pet name="Ricky" animal="Dog" breed="GSD" />
        <Pet name="Katrina" animal="Dog" breed="GSD" />
        <Pet name="Tango" animal="Dog" breed="Golden Retreiver" />
      </div>
      )
  }
}

render(React.createElement(App), document.getElementById("root"));
