import React, { Component } from 'react';

class Home extends Component {
    
    render() { 
        return (  
            <div className={"home " + this.props.className}>
                <h1>Linus Martin</h1>
                <h4>Web Developer</h4>
            </div>

        );
    }
}
 
export default Home;