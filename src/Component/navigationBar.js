import React, {Component} from "react"
import pokemon from'../Image/pokemon.png'
class NavigationBar extends Component{
    render(){
        return(
            <div className="navbar">
                <img src={pokemon} alt="pokemon" width="150px" height= "auto"/>
            </div>
        )
    }
}

export default NavigationBar