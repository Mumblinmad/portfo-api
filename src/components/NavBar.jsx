import React, { Component } from 'react';

class NavBar extends Component {

    handleClick = (event) => {
        console.log("Line 6, NavBar"+ event.target.id)
        this.props.onChange(event.target.id)
    }
    
    render() { 
        return <nav>
            <a onClick={this.handleClick} id="home" href="#">Home</a>
            <a onClick={this.handleClick} id="port" href="#">Port</a>
            <a onClick={this.handleClick} id="info" href="#">About</a>
            <a onClick={this.handleClick} id="more"href="#">More</a>
        </nav>;
    }
}
 
export default NavBar;