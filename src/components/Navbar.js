import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className={`px-3 fixed-top  `} bg="light" expand="lg">
      <Navbar.Brand className="navbar-brand">PORTFOLIO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#data-table">Table</NavLink>
          <NavLink href="/#blogs">Blogs</NavLink>
          <NavLink href="/#feedback">Feedback</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      // target="_blank"
      // rel="noreferrer noopener"
      className={`nav-item lead ${props.className}`}>
      {props.children}
    </Nav.Link>
  );
};
