import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import PokemonDetailedInfo from "../Component/pokemonDetailedInfo";

let pokemons = [];
let pokemonsIndividualData = [];
class PokemonSearch extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      inputs: [],
      pokemonsImage: [],
      divPokemons: "Pokemons",
      loaded: false
    };
  }

  changeValue = () => {
    return this.setState({ pokemonsImage: [] });
  };

  handelChange = event => {
    this.setState({ value: event.target.value.replace(" ", "") });
    this.setState({ inputs: event.target.value.split(",") });
  };
  submitValue = event => {
    event.preventDefault();
    if (this.state.value === "") {
      alert(
        "Please enter the pokemon type such as fire,rock,electric,grass etc"
      );
    } else {
      this.setState({ value: "" });
      pokemons = [];
      pokemonsIndividualData = [];
      this.state.inputs.map(data => {
        return this.getPokemonData(data);
      });
    }
  };
  getPokemonData = async x => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${x}`);
    if (response.ok) {
      const json = await response.json();
      pokemons = json.pokemon.map(data => {
        return data.pokemon.url;
      });
    } else {
      alert("Pokemon type does not match");
    }
    pokemons.map(data => {
      return this.findIndividualPokemon(data);
    });
  };
  findIndividualPokemon = async data => {
    const response = await fetch(`${data}`);
    const json = await response.json();
    pokemonsIndividualData.push(json);
    this.setState(prevState => {
      prevState.pokemonsImage = pokemonsIndividualData.map((data, index) => {
        return (
          <div className="PokemonElement" key={index}>
            <li>
              <img src={data.sprites.front_default} alt="img" />
            </li>
            <li>{data.name}</li>
          </div>
        );
      });
    });
    this.setState({ inputs: [], loaded: true });
  };
  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <div className="inputbar">
            <form className="myForm" onSubmit={this.submitValue}>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="Enter the type of the pokemon"
                  value={this.state.value}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <button className="buttonForm" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className={this.state.divPokemons}>
            {this.state.pokemonsImage}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="inputbar">
            <form className="myForm" onSubmit={this.submitValue}>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="Enter the type of the pokemon"
                  value={this.state.value}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <button className="buttonForm" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <center>
            <div className="nav3">
              <NavLink
                to={{
                  pathname: this.props.match.url + "/pokemonDetailedInfo",
                  state: { data: pokemonsIndividualData }
                }}
                onClick={this.changeValue}
              >
                Details
              </NavLink>
            </div>
          </center>
          <Route
            exact
            path={this.props.match.url + "/pokemonDetailedInfo"}
            component={PokemonDetailedInfo}
          />
          <div className="Pokemons">{this.state.pokemonsImage}</div>
        </div>
      );
    }
  }
}
export default PokemonSearch;