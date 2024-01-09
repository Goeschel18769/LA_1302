import React, { Component } from 'react'
import "./index.css"

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header>
                <h1 id="titel">
                Die Virtuosen der Numerischen Höhen und Tiefen: Entwicklergruppe für ein Hoch-Runter-Spiel der Extraklasse!
                </h1>
            </header>
        );
    }
}
 
export default Header;