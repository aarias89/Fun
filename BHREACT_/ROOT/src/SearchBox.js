import React from 'react'
import { ANIMALS } from 'petfinder-client'
// import { API_KEY, API_SECRET } from './Keys';
import { Consumer } from './SearchContext'
//this component will work in both the searchparams and  results page

//dont need petfinder anymore since App.js is handling this data.
// const petfinder = pf({
//   key: API_KEY,
//   secret: API_SECRET
// })


    //function context as a child, move all markup into this context function, everything in this context functino can be referenced, context is the state of App.js
export default class SearchBox extends React.Component {

  render() {
    return (
      <Consumer>

      { context => (
         <div className="search-params">
          <label htmlFor="location">
            Location
            <input
              onChange={context.handleLocationChange}
              id="location"
              value={context.location}
              palceholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={context.animal}
              onChange={context.handleAnimalChange}
              onBlur={context.handleAnimalChange}
            >
              <option value=""> All Animals </option>
              {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
              ))}
            </select>
          </label>

          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={context.breed}
              onChange={context.handleBreedChange}
              onBlur={context.handleBreedChange}
              disabled={context.breeds.length === 0}
            >
              <option value=""> All Breeds </option>
              {context.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </div>
      )}

      </Consumer>
    )
  }
}
