import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from './SearchParams'
import pf from 'petfinder-client'
import { Provider } from './SearchContext'
import { API_KEY, API_SECRET } from './Keys';



const petfinder = pf({
  key: API_KEY,
  secret: API_SECRET
})
//context will be reading from App state, then providing that info into the provider, the consumer will allow the data to be read from the other endpoint.
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
     location: "New York, NY",
      animal: '',
      breed: '',
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    }
  }

    handleLocationChange = event => {
    this.setState({
      location: event.target.value
    })
  }

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value,
      breed: ""
    }, this.getBreeds)
  }

  handleBreedChange = event => {
    this.setState ({
      breed: event.target.value
    })
  }

  getBreeds() {
    if(this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          })
        } else {
          this.setState({ breeds: [] })
        }
      })
    } else {
      this.setState({ breeds: [] })
    }
  }



  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
