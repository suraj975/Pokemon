import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./Component/navigationBar";
import Home from "./Component/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FindPokemon from "./Component/findPokemon";
import Navigation from "./Component/navigation";
import Error from "./Component/error"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/findPokemon" component={FindPokemon} />
            <Route component={Error} />
          </Switch>
        </div>
     
      </BrowserRouter>
    );
  }
}
export default App;