import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import { API_KEY, API_SECRET } from './Keys'

const petfinder = pf({
  key: API_KEY,
  secret: API_SECRET
});

 export default class Results extends React.Component {
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
        if(data.petfinder.pets && data.petfinder.pets.pet)
        {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet
          } else {
            pets = [data.petfinder.pets.pet]
          }
        } else {
          pets = []
        }

        this.setState({

          pets
        })
      })
  }

  render() {
    return (
        <div className="search">
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
      )
  }
}
