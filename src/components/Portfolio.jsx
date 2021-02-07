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

    //TODO: make as many images for portfolio as strapi provides

    
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
                <div className="verticalStripe"></div>
                <div className="horizontalStripe"></div>
            <div className="portGrid">
            <h1>Portfolio</h1>
                <div className="buttonBox">
                    <h3>Projects</h3>
                {renderList}
                </div>
                
                <article className="projectShown">
                    <h1>{dProj.Title}</h1>
                    <p id='pDateCreated'>{dProj.DateCreated}</p>
                    <a href={dProj.HostedUrl} id='pHostedUrl'>{dProj.HostedUrl}</a>
                    <p id='pDescription'>{dProj.Description}</p>
                    {console.log("localhost:1337"+ dProj.Images[0].url)}
                    <img src={"http://localhost:1337"+ dProj.Images[1].url} alt=""/>
                </article>
                </div>
            </div> );

                
            
        }
    
        else{
        
        return (<div className={"port "+this.props.mode}>
        <div className="verticalStripe"></div>
        <div className="horizontalStripe"></div>
    <div className="portGrid">
    <h1>Portfolio</h1>
        <div className="buttonBox" style={{marginTop:"15%"}}>
            <h3>Projects</h3>
            <p>Loading Projects ...</p>
        </div>
        
        <article className="projectShown" style={{marginTop:"8%"}}>
            <h1>Loading Project details...</h1>
        </article>
        </div>
    </div> );}
    }
}
 
export default Portfolio;