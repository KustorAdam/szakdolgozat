import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
  return (
    <Navbar bg="blue" variant="blue">
      <Navbar.Brand href="/home">Főoldal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/menu">Menü</Nav.Link>
        <Nav.Link href="/">Kijelentkezés</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;