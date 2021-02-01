import React, { Component } from 'react';
import Home from './Home'
import Portfolio from './Portfolio';
import Info from './Info'
import More from './More'

class Display extends Component {
    
    //Pages will Be Home, Portfolio, About, Contact

    render() { 
       switch(this.props.mode){
           

           case 'home':
            return(<Home className={this.props.className} />);
               

            case 'port':
                return(<Portfolio className={this.props.className} />);
                

            case 'info':
                return(<Info className={this.props.className}/>)
                

            case 'more':
                return(<More className={this.props.className}/>)
            
            default:
                return(<Home className={this.props.className} />);


           

       }
        
    }
}
 
export default Display;