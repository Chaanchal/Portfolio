import React, { Component } from 'react';
import ProjectCard from "./ProjectCard.js";
import './Project.css';

class Project extends Component{
    render(){
        return(
            
            <div className="project" style={{display: 'flex', color: 'Black'}}>

                <div className="projCard" style={{height: '500px'}}>
                <img src={require("./Test.jpeg")} className="projImg rounded mx-auto d-block" alt="..." ></img>
                </div>
                <div className="projCard" style={{height: '400px'}}>
                <img src={require("./Test.jpeg")} className="projImg rounded mx-auto d-block" alt="..." ></img>
                </div>
                <div className="projCard" style={{height: '300px'}}>
                <img src={require("./Test.jpeg")} className="projImg rounded mx-auto d-block" alt="..." ></img>
                </div>
               
                {/* <div class="jumbotron jumbotron-fluid" height="75%">
                    <div class="container"  >
                        <h1 class="display-4">Chanchal Agrawal</h1>
                        <hr/>
                        <h1 class="display-4">Product designer; aspired to create 
                        <br/>experience that goes beyond expectations</h1>
                    </div>
                   <ProjectCard/>
                   <ProjectCard/>
                  
                </div> */}


            </div>
        );
    }
}
export default Project;