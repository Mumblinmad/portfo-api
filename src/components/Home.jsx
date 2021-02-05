import React, { Component } from 'react';


class Home extends Component {
    
    render() { 
        return (  
            <div className={"home " + this.props.className}>
                <div className="container">
                <div className='topText'>
                <h1>Linus Martin</h1>
                </div>
                <div className="bottomText">
                    <h3>Web </h3>
                    <h3>Developer</h3>
                </div>
                <div className="callToAction">
                    <p>You might run a small business, but, online, there's no reason for your business to look small.</p>
                    <button>Here's Why </button>
                </div>
                </div>
            </div>

        );
    }
}
 
export default Home;