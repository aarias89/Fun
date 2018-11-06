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
  constructor(props){
    super(props)

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "New York, NY"})
      .then( data => {
        let pets ;
        //XML data check if response is not empty, if its empty it will default to NULL
        if(data.petfinder.pets && data.petfinder.pets.pet)
        {
          //check if reponse is an object or array of objects
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet
          } else {
            pets = [data.petfinder.pets.pet]
          }
        } else {
          pets = []
        }

        this.setState({
          //since key (peys) and value (pets) are the same, we can just write pets
          pets
        })
      })
  }

  render() {
    return (
      //pre (preformatted)/code will allow you to dump all yourstate into your DOM for testing
      <div>
        <h1>Adopt Me</h1>
        <div>
          {this.state.pets.map((pet)=> {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(', ')
            } else {
              breed =  pet.breeds.breed
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media = {pet.media}
                location = { `${pet.contact.city}, ${pet.contact.state}`}
              />
            )
          })}
        </div>
      </div>
      )
  }
}

render(React.createElement(App), document.getElementById("root"));
