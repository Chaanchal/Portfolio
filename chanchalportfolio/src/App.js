import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar.js";
import Contact from "./component/Contact.js";
import Project from "./component/Project.js";

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        {/* <Project /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
