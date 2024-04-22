import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
  return (
    <Navbar bg="blue" variant="blue">
      <Navbar.Brand  href="/profil">Profil</Navbar.Brand>
      <Nav className="mr-auto">
        <li className='blue'>KÉK</li>
      <li>
        <Nav.Link className='menupoint' href="/thisweek">Menü</Nav.Link>
        </li>
        <li>
        <Nav.Link className='menupoint2' href="/">Kijelentkezés</Nav.Link>
        </li>
      </Nav>
    </Navbar>
  );
}

export default NavBar;