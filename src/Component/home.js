
import React, { Component } from "react";
let arr1 = [];
let arr2 = [];
let date = new Date();
let day  = date.getDay();
let month = date.getMonth();
let total = day + month + 1
class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      inputs: [],
      defaultpokemon: [],
      specificpokemon: [],
      loaded: false,
      chnangeRender: false
    };
  }
  async componentDidMount() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${total}`);
    const json = await response.json();
    arr1[0] = json;
    this.setState(prevState => {
      prevState.defaultpokemon = arr1.map((data, index) => {
        return (
          <div className="MainElement" key={index}>
            <li>
              <img src={data.sprites.front_default} alt="img"/>
            </li>
            <li>
              <h3>
                Hi!! My name is <strong>{data.name}</strong>. Welcome to our
                pokemon world.
              </h3>
            </li>
          </div>
        );
      });
    });
    this.setState({ loaded: true });
  }

  handelChange = event => {
    this.setState({ value: event.target.value.replace(" ", "") });
  };
  submitValue = event => {
    event.preventDefault();
    if(this.state.value === ""){
        alert("Please enter the name of pokemon")
    }else{
    this.setState({ inputs: this.state.inputs.push(this.state.value) });
    this.setState({ value: "" });
    this.findSpecificPokemon(this.state.inputs);
    }
  };
  findSpecificPokemon = async data => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);
    if(response.ok){
    const json = await response.json();
    arr2[0] = json;
    } else{
        alert("please enter the proper name")
    }
    this.setState(prevState => {
      prevState.specificpokemon = arr2.map((data, index) => {
        return (
          <div className="MainElement" key={index}>
            <li>
              <img src={data.sprites.front_default} alt="img"/>
            </li>
            <label>
              <strong>Abilities</strong>
            </label>
            <li>
              {data.abilities[0].ability.name}
            </li>
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
    this.setState({ chnangeRender: true, inputs: [] });
  };

  render() {
    if (this.state.chnangeRender === false) {
      return (
        <div>
          <div className="inputbar">
            <form className="myForm" onSubmit={this.submitValue}>
              <div className="inputForm">  
              <input
                type="text"
                placeholder="Enter the name of the pokemon"
                value={this.state.value}
                onChange={this.handelChange}
              />
              </div>
              <div>
              <button 
              className="buttonForm"
              type="submit">Search</button>
              </div>
            </form>
          </div>
          <div className="InitialPicBox">{this.state.defaultpokemon}</div>
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
                placeholder="Enter the name of the pokemon"
                value={this.state.value}
                onChange={this.handelChange}
              />
              </div>
              <div>
              <button 
              className="buttonForm"
              type="submit">Search</button>
              </div>
            </form>
          </div>
          <div className="InitialPicBox">{this.state.specificpokemon}</div>
        </div>
      );
    }
  }
}

export default Home;
