import React, {Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';
import IconBar from './IconBar.js';
// import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';


class Navbar extends Component {
render(){
    return(

      <div className="sidebar">
            <img className ="sidebar_logo" src={require('../logo.svg')}  style={{marginBottom: "50px"}} alt ="Spotify logo"/>
            {/* <img className ="sidebar_logo" src ="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt ="Spotify logo"/> */}
            {/* <NavItem className=" ml-auto"><NavLink className="navItem" href="www.google.com">PROJECTS</NavLink></NavItem>
            <NavItem className=" ml-auto"><NavLink className="navItem" href="www.google.com">DESIGNS</NavLink></NavItem>
            <NavItem className=" ml-auto"><NavLink className="navItem" href="www.google.com">CONTACT</NavLink></NavItem> */}
            <NavItem className="navItem"><NavLink href="www.google.com">PROJECTS</NavLink></NavItem>
            <NavItem className="navItem"><NavLink href="www.google.com">DESIGNS</NavLink></NavItem>
            <NavItem className="navItem"><NavLink href="www.google.com">CONTACT</NavLink></NavItem>
            <IconBar/>

        </div>

      // <div>
        
      //   <Nav class="navbar-expand-lg" style={{background: 'pink', flexDirection: 'column'}}>
      //     <div>
      //     <NavLink class="navbar-brand topnav-right" to="/">
      //           <img src={require('../logo.svg')} height="50px" width="50px" />
      //     </NavLink>
      //     </div>
      //     <NavItem class="ml-auto">
      //       <NavLink href="#">Projects</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink href="#">Blogs</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink href="#">Designs</NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink disabled href="#">Contact</NavLink>
      //     </NavItem>
      //   </Nav>
  
      // </div>              
    );
}
}

export default Navbar;