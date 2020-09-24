import React, { Component } from 'react';
import ProjectCard from "./ProjectCard.js";

class Project extends Component{
    render(){
        return(
            <div className="Project">
                <div class="jumbotron jumbotron-fluid" height="75%">
                    <div class="container"  >
                        <h1 class="display-4">Chanchal Agrawal</h1>
                        <hr/>
                        <h1 class="display-4">Product designer; aspired to create 
                        <br/>experience that goes beyond expectations</h1>
                    </div>
                   <ProjectCard/>
                   <ProjectCard/>
                   <ProjectCard/>
                </div>


            </div>
        );
    }
}
export default Project;