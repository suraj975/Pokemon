import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div className="navigation">
        <NavLink className="fifth before after" to="/">Home</NavLink>
        <NavLink className="fifth before after" to="/findPokemon">Find Pokemon</NavLink>
      </div>
    );
  }
}

export default Navigation;
