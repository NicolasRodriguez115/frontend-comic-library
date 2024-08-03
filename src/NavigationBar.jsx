import React from "react";
import { NavLink, } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {

  return (
    <Navbar bg='light' expand="lg">
      <Navbar.Brand href="/">Comic Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/comics">
            Comics
          </Nav.Link>
          <Nav.Link as={NavLink} to="/character-details/id">
            Character Details
          </Nav.Link>
          <Nav.Link as={NavLink} to="/browse-character">
            Browse Character
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default NavigationBar