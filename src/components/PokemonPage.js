import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonUrl = ' http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: '',
  }

  addNewPokemon = (e, newPokemon) => {
    e.preventDefault()
      fetch(pokemonUrl, {
        method: 'POST',
        body: JSON.stringify(newPokemon),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      } )
        .then(response => response.json())
        .then(pokemon => this.setState({ pokemons: [...this.state.pokemons, pokemon] }))
  }


  componentDidMount() {
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(pokemons => this.setState({ pokemons }))
  }

  searchPokemon = (e) => {
    this.setState({ search: e})


  }

  render() {
    let searchedPokemons = this.state.pokemons.filter(pokemon => 
      pokemon.name.includes(this.state.search))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search 
          pokemons={searchedPokemons}
          search={this.state.search}
          searchPokemon={this.searchPokemon}
        />
        <br />
        <PokemonCollection pokemons={searchedPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
