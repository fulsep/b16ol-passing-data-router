import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink
} from 'reactstrap';

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar color='dark' expand='md' dark>
        <NavbarBrand>Hello</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
