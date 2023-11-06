import { React } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

export const NaviBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Web Dev Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>Users</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2">
              Log In
            </Button>
            <Button variant="primary" className="me-2">
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
