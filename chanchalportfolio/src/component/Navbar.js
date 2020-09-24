import React, {Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends Component {
render(){
    return(
      <div>
        
        <Nav class="navbar-expand-lg">
          <div>
          <NavLink class="navbar-brand topnav-right" to="/">
                <img src={require('../logo.svg')} height="50px" width="50px" />
          </NavLink>
          </div>
          <NavItem class="ml-auto">
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blogs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Illustrations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>              
    );
}
}

export default Navbar;