import React from 'react';
import pf from 'petfinder-client';
import { API_KEY, API_SECRET } from './Keys';

const petfinder = pf({
  key: API_KEY,
  secret: API_SECRET
});
//run npm install -D babel-eslint babel-core babel-preset-env babel-plugin-transform-class-properties babel-preset-react
//babel-eslint- will allow eslint to use babel to transform your code so it cna read it
//babel-core is responsible for doing all the transformatinos
//babel-preset-env -takes your future javascript and transpiles it to curren javasacript
//babel-plugin-transform-class-properties -allows you to do top level properties on classes
//babel-preset-react -allows babael to understand JSX

export default class Details extends React.Component {

    state = {
      loading: true
    };

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city}, ${
            data.petfinder.pet.contact.state
          }`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const { name, animal, breed, location, description } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
