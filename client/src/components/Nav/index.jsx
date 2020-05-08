import React from 'react';
import Navbar, { NavbarText } from 'react-bootstrap/Navbar';
import { signOut } from './../../services/authentication';

// import { Link } from 'react-router-dom';

export default function Nav(props) {
  function handleLogOut(event) {
    event.preventDefault();
    signOut()
      .then(() => {
        props.updateUserInformation(null);
        // props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="m-2" href="/">
        <i className="fas fa-water"></i>
        {props.user && <Navbar.Text className="ml-3">Hola {props.user.name}</Navbar.Text>}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {(props.user && (
          <a className="ml-auto" onClick={handleLogOut}>
            <Navbar.Text className="m-2">Logout</Navbar.Text>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        )) || (
          <a className="ml-auto" href="/signin">
            {' '}
            <Navbar.Text className="m-2">Ingresá</Navbar.Text>
            <i className="fas fa-sign-in-alt"></i>
          </a>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
