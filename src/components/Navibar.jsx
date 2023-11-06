import { React } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const NaviBarStyle = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export const NaviBar = () => {
  return (
    <NaviBarStyle>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Web Dev Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
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
        </Container>
      </Navbar>
    </NaviBarStyle>
  );
};
