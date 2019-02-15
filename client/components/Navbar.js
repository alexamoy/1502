import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <Navbar bg="light" expand="lg" id="navbar">
        <Navbar.Brand href="#home">1502 $hit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Shopping List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
