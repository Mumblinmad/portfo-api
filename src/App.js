import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      mode:'home'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (newMode) => {
    this.setState({mode:newMode})
    console.log(this.state.mode)
  }

  render() { 
    return ( <section>
    <NavBar onChange={this.handleChange}/>
    <Display className='display' mode={this.state.mode} />
    </section> );
  }
}
 
export default App;