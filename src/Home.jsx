import React from "react";
import { Slider } from "./components/Slider";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import lion from "./components/lion.jpg";

export const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={lion} />
              <Card.Body>
                <Card.Title>My Card</Card.Title>
                <Card.Text>lorem lskdjf aslkjdal kdjalskdfj alskdjf </Card.Text>
                <Button variant="primary">Learn more...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={lion} />
              <Card.Body>
                <Card.Title>My Card</Card.Title>
                <Card.Text>lorem lskdjf aslkjdal kdjalskdfj alskdjf </Card.Text>
                <Button variant="primary">Learn more...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={lion} />
              <Card.Body>
                <Card.Title>My Card</Card.Title>
                <Card.Text>lorem lskdjf aslkjdal kdjalskdfj alskdjf </Card.Text>
                <Button variant="primary">Learn more...</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
