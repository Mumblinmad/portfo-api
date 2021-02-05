import React, { Component } from 'react';

class NavBar extends Component {

    handleClick = (event) => {
        console.log("Line 6, NavBar"+ event.target.id)
        this.props.onChange(event.target.id)
    }
    
    render() { 
        return <nav>
            <h2>L.M. Dev</h2>
            <p onClick={this.handleClick} id="home">Home</p>
            <p onClick={this.handleClick} id="port">Port</p>
            <p onClick={this.handleClick} id="info">Info</p>
            <p onClick={this.handleClick} id="more">About</p>
            
        </nav>;
    }
}
 
export default NavBar;