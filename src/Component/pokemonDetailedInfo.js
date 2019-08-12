
import React, { Component } from "react";

class PokemonDetailedInfo extends Component {
  constructor() {
    super();
    this.state = {
      detailsOfPokemon: [],
      info: [],
      loaded: false
    };
  }

  componentWillMount() {
    this.setState({ info: this.props.location.state.data });
  }

  componentDidMount() {
    this.setState(prevState => {
      prevState.detailsOfPokemon = this.state.info.map((data, index) => {
        return (
          <div className="MainElement" key={index}>
            <li>
              <img src={data.sprites.front_default} alt="img" />
            </li>
            <label>
              <strong>Abilities</strong>
            </label>
            <li>{data.abilities[0].ability.name}</li>
            <label>
              <strong>Stats</strong>
            </label>
            <li>
              {data.stats[0].stat.name} - {data.stats[0].base_stat}{" "}
            </li>
            <li>
              {data.stats[1].stat.name} - {data.stats[1].base_stat}{" "}
            </li>
            <li>
              {data.stats[2].stat.name} - {data.stats[2].base_stat}{" "}
            </li>
            <li>
              {data.stats[3].stat.name} - {data.stats[3].base_stat}{" "}
            </li>
            <li>
              {data.stats[4].stat.name} - {data.stats[4].base_stat}{" "}
            </li>
            <li>
              {data.stats[5].stat.name} - {data.stats[5].base_stat}{" "}
            </li>
          </div>
        );
      });
    });

    this.setState({ loaded: true });
  }
  render() {
    return (
      <div className="pokemonDetailedInfo">{this.state.detailsOfPokemon}</div>
    );
  }
}

export default PokemonDetailedInfo;
