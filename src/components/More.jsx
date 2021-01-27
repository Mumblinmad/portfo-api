import React, { Component } from 'react';

class More extends Component {
    render() {
        return (
            <div className={'more'+this.props.className}>
                <h1>More</h1>
            </div>
        );
    }
}

export default More;