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
      <div style={{ backgroundColor: 'white', margin:'0px', width: '100vw', display:'flex', flexDirection: 'row'}}>
         
          <div  style={{position: 'relative', zIndex: '1', width:'20vw'}}>  
            <Navbar/>
          </div>
          <div style={{margin:'0px 10%', flexDirection:'column',display:'flex', position:'relative', width:'80vw'}}>
            <Project />
            <Design/>
            <Contact />
          </div>
      </div>
    );
  }
}

export default App;
