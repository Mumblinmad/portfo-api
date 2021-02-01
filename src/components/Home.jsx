import React, { Component } from 'react';


class Home extends Component {
    
    render() { 
        return (  
            <div className={"home " + this.props.className}>
                <div className="container">
                <div className="glassBg"></div>
                <div className='homeText'>
                <h1>Linus Martin</h1>
                <h4>Web Developer</h4>
                </div>
                </div>
            </div>

        );
    }
}
 
export default Home;