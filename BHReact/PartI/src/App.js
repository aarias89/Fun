import React from "react";
import ReactDOM from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";
import { render } from 'react-dom'
import Pet from './Pet'

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {

      console.log(process.env.API_KEY)

  render () {
    return (
      <div>
        <h1>Adopt Me 1</h1>
        <Pet name="Ricky" animal="Dog" breed="GSD" />
        <Pet name="Katrina" animal="Dog" breed="GSD"/>
        <Pet name="Tango" animal="Dog" breed="Golden Retreiver"/>
      </div>
    )

  }
}




render(React.createElement(App), document.getElementById('root'))
