import React from "react";
import { Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom"

import "./index.scss";

const Navbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">HomePage</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contract">Contract</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar;
