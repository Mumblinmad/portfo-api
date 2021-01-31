import React, { Component } from 'react';



class Portfolio extends Component {

    constructor(){
        super();
        this.state = {projects:[],
        displayedProject: {},
        isLoaded:false,
        mode:1}

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const url = "http://localhost:1337/projects"
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data); this.setState({projects:data,isLoaded:true,displayedProject:data[0]})})
        
    }

    handleClick(event){
        let id = Number(event.target.id)
        id = id - 1;
        console.log(id)
        this.setState({displayedProject:this.state.projects[id]})
    }

    
    render() { 

        if(this.state.isLoaded===true){
            console.log(this.state.projects)
            var renderList = [];
            var projList = this.state.projects;
            for (let i = 0; i < projList.length; i++) {
                let elem = <button id={projList[i].id} onClick={this.handleClick}> {projList[i].Title}</button>
                renderList.push(elem)
            }
            
            
            var dProj = this.state.displayedProject
                    return ( 
            <div className={"port "+this.props.mode}>
            <h1>Portfolio</h1>
                <div className="buttonBox">
                {renderList}
                </div>
                
                <article>
                    <h1>{dProj.Title}</h1>
                    <p id='pDateCreated'>{dProj.DateCreated}</p>
                    <a href={dProj.HostedUrl} id='pHostedUrl'>{dProj.HostedUrl}</a>
                    <p id='pDescription'>{dProj.Description}</p>
                </article>
            </div> );

                
            
        }
    
        else{
        
        return ( <div className={"port "+this.props.mode}>
            <h1>Portfolio</h1>
            <p>Loading.... </p>
        </div> );}
    }
}
 
export default Portfolio;