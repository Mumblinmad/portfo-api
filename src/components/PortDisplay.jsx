import React, { Component } from 'react';

class PortDisplay extends Component {
    render() {
        return(
        <div>
            <h1>{this.props.item.Title}</h1>
        </div>);
    }
}

export default PortDisplay;