import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"> Un titulo muy lindo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
}
