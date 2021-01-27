import React, { Component } from 'react';

class Project extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.onChange(event.target.id)
    }

    render() {
        return (
            <button id={this.props.item.id} onClick={this.handleClick}>{this.props.item.Title}</button>
        );
    }
}

export default Project;