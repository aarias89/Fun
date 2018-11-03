import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

class App extends React.Component {
  handleTitleClick() {
      console.log("You Cliked the title")
  }
  render () {
    // return React.createElement("div", {},[
    //   React.createElement("h1", { onClick: this.handleTitleClick}, 'Adopt Me!'),
    //   React.createElement(Pet, {
    //     name: 'Ricky',
    //     animal: 'Dog',
    //     breed: 'GSD'
    //   }),
    //   React.createElement(Pet, {
    //     name: 'Katrina',
    //     animal: 'Dog',
    //     breed: 'GSD'
    //   }),
    //   React.createElement(Pet, {
    //     name: 'Tango',
    //     animal: 'Dog',
    //     breed: 'Golden Retriver'
    //   }),
    // ])
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
