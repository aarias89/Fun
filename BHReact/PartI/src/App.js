import React from 'react'
import { render } from 'react-dom'

const Pet = (props) => {
  return React.createElement("div",null,[
    React.createElement("h1",{},props.name),
    React.createElement("h2",{},props.animal),
    React.createElement("h2",{},props.breed)
  ])
}

class App extends React.Component {
  handleTitleClick() {
      console.log("You Cliked the title")
  }
  render () {
    return React.createElement("div", {},[
      React.createElement("h1", { onClick: this.handleTitleClick}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Ricky',
        animal: 'Dog',
        breed: 'GSD'
      }),
      React.createElement(Pet, {
        name: 'Katrina',
        animal: 'Dog',
        breed: 'GSD'
      }),
      React.createElement(Pet, {
        name: 'Tango',
        animal: 'Dog',
        breed: 'Golden Retriver'
      }),
    ])

  }
}




render(React.createElement(App), document.getElementById('root'))
