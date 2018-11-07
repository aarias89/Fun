import React from 'react'

//createContect will create two components, a consumer component anf a provider component.
//A provider will make all the data availlable underneath it
//A consumer will read that data from the provider



//methods inside this function do not do anything, these are "dummy methods"
const SearchContext = React.createContext({
  location: "New York, NY",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange(){},
  handleBreedChange(){},
  handleLocationChange(){},
  getBreeds(){}
})

export const Provider = SearchContext.Provider
export const Consumer = SearchContext.Consumer