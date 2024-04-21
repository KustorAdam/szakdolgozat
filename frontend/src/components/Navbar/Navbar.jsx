import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
  return (
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Főoldal</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/thisweek">Heti menü</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/nextweek">Jövő heti menü</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/profil">Profil</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Kijelentkezés</Nav.Link>
    </Nav.Item>
  </Nav>
)
}

export default NavBar;