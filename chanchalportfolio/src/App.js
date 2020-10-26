import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar.js";
import Contact from "./component/Contact.js";
import Project from "./component/Project.js";
import Design from "./component/Design.js";

class App extends Component{
  render(){
    return(
      <div style={{ backgroundColor: 'black', paddingLeft: '10%', margin:'0px auto'}}>
          <div  style={{position: 'fixed', zIndex: '1', width:'20%', top:'0', bottom:'0', left:'0', right: 'auto' }}>  
            <Navbar/>
          </div>
          <div style={{width: '70%', margin:'0px auto', maxWidth:'100%'}}>
            <Project />
            {/* <Design/>
            <Contact /> */}
          </div>
      </div>
    );
  }
}

export default App;
