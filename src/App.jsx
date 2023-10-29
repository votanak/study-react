import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Styles = styled.div`
  .row {
    height: 100px;
    padding: 5px;
    align-items: center;
    justify-content: left;
  }

  input {
    margin: 10px;
    width: 30%;
  }
`;

const initProds = [
  { id: uuidv4(), name: "prod1", catg: "catg1", cost: 100 },
  { id: uuidv4(), name: "prod2", catg: "catg2", cost: 200 },
  { id: uuidv4(), name: "prod3", catg: "catg3", cost: 300 },
];

export const App = () => {
  const [prods, setProds] = useState(initProds);
  const [obj, setObj] = useState({ id: "", name: "", catg: "", cost: "" });
  const [editId, setEditId] = useState();

  const editHandler = (edId) => {
    setEditId(edId);
    setObj(prods.find((el) => el.id === edId));
  };

  const result = prods.map((el) => (
    <Row key={el.id}>
      <Col>{el.name}</Col>&nbsp;
      <Col>{el.catg}</Col>&nbsp;
      <Col>{el.cost}</Col>&nbsp;
      <Col>
        <Button onClick={() => editHandler(el.id)}>Edit element</Button>
      </Col>
    </Row>
  ));

  const getValue = (prop) =>
    Boolean(editId) ? prods.find((el) => el.id === editId)[prop] : obj[prop];

  const changeHandler = (event, prop) => {
    if (Boolean(editId)) {
      setProds(
        prods.map((prod) =>
          prod.id === editId ? { ...prod, [prop]: event.target.value } : prod
        )
      );
    } else {
      setObj({ ...obj, [prop]: event.target.value });
    }
  };

  const saveItem = () => {
    if (Boolean(editId)) {
      setEditId();
      setObj({ id: "", name: "", catg: "", cost: "" });
    } else {
      setProds([...prods, { ...obj, id: uuidv4() }]);
      setObj({ id: "", name: "", catg: "", cost: "" });
    }
  };

  return (
    <Styles>
      <Container fluid>{result}</Container>
      <Form.Control
        value={getValue("name")}
        onChange={(e) => changeHandler(e, "name")}
      />
      <Form.Control
        value={getValue("catg")}
        onChange={(e) => changeHandler(e, "catg")}
      />
      <Form.Control
        value={getValue("cost")}
        onChange={(e) => changeHandler(e, "cost")}
      />
      <Button onClick={saveItem}>Fixing</Button>
    </Styles>
  );
};
