import React, { Component } from 'react';

class NavBar extends Component {

    handleClick = (event) => {
        console.log("Line 6, NavBar"+ event.target.id)
        this.props.onChange(event.target.id)
    }
    
    render() { 
        return <nav>
            <h2>L.M. Dev</h2>
            <button onClick={this.handleClick} id="home" >Home</button>
            <button onClick={this.handleClick} id="port" >Port</button>
            <button onClick={this.handleClick} id="info" >About</button>
            <button onClick={this.handleClick} id="more" >Contact</button>
        </nav>;
    }
}
 
export default NavBar;