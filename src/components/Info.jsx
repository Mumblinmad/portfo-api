import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className={'info'+this.props.className}>
                <h1>Info</h1>

                <h1>Education</h1>
                <div className=""></div>
                <h1>Skills</h1>
            </div>
        );
    }
}

export default Info;