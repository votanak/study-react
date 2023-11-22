import { React, useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
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
                <Button variant="primary" className="me-2" onClick={handleShow}>
                  Log In
                </Button>
                <Button variant="primary" className="me-2" onClick={handleShow}>
                  Sign Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </NaviBarStyle>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail adress</Form.Label>
              <Form.Control type="email" placeholder="e-mail" />
              <Form.Text className="text-muted">
                We'll never Share e-mail
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>E-mail adress</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group controlId="formBasicChekbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
