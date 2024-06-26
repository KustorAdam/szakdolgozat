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
        <Nav.Link className='menupoint' href="/thisweek">Ez a hét</Nav.Link>
        </li>
        <li>
        <Nav.Link className='nextweek' href="/nextweek">Jövő hét</Nav.Link>
        </li>
        <li>
        <Nav.Link className='menupoint2' href="/">Kijelentkezés</Nav.Link>
        </li>
      </Nav>
    </Navbar>
  );
}

export default NavBar;