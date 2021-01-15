import React, { Component } from 'react';
import Home from './Home'
import Portfolio from './Portfolio';

class Display extends Component {
    
    //Pages will Be Home, Portfolio, About, Contact

    render() { 
        console.log(this.props.mode);
       switch(this.props.mode){
           

           case 'home':
               return(<Home className={this.props.className} />);
               break;

            case 'port':
                return(<Portfolio className={this.props.className} />);
                break;

           

       }
        
    }
}
 
export default Display;