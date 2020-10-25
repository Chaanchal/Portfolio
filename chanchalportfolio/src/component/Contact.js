import React, {Component } from 'react';
import Timeline from "./Timeline.js";
import 'react-vertical-timeline-component/style.min.css';
class Contact extends Component{
    render(){
        return(
            <div className="Contact">
            {/* <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={require("./profile.png")} class="rounded float-right" alt="..." height="250px" width="250px"></img>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5>Chanchal Agrawal</h5>
                        <p class="lead"> I am a User Experience designer currently studying in Rochester Institute of Technology as a Human-Computer Interaction graduate student. Currently working as Research Assistant in Accessibility domain under guidance of Dr. Roshan Peiris
 
                        <br /><br />Coming from Computer Engineering background and pursuing design, I love connecting dots between a products technical working, beautiful appeal and user satisfaction. I have experience in development and now I would like to work towards enhancing my design skills.</p>
                        <div class="timeline section">
                            <div class="timeline container">
                                <ul class="timeline">
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
            {/* <Timeline /> */}

            </div>
        );
    }
}
export default Contact;