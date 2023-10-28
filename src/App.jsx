import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Row, Col, Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
    prop1: "value11",
    prop2: "value12",
    prop3: "value13",
  },
  {
    id: "IWSpfBPSV3SXgRF87uO74",
    prop1: "value21",
    prop2: "value22",
    prop3: "value23",
  },
  {
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

export const App = () => {
  const [notes, setNotes] = useState(initNotes);
  const [inpValue1, setInpValue1] = useState("");
  const [inpValue2, setInpValue2] = useState("");
  const [inpValue3, setInpValue3] = useState("");

  const result = notes.map((el) => (
    <p key={el.id}>
      <span>{el.prop1}</span>&nbsp;
      <span>{el.prop2}</span>&nbsp;
      <span>{el.prop3}</span>
    </p>
  ));

  const addItem = () => {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        prop1: inpValue1,
        prop2: inpValue2,
        prop3: inpValue3,
      },
    ]);
    setInpValue1("");
    setInpValue2("");
    setInpValue3("");
  };

  return (
    <div>
      {result}
      <Form.Control
        onChange={(e) => setInpValue1(e.target.value)}
        value={inpValue1}
      />
      <br />
      <Form.Control
        onChange={(e) => setInpValue2(e.target.value)}
        value={inpValue2}
      />
      <br />
      <Form.Control
        onChange={(e) => setInpValue3(e.target.value)}
        value={inpValue3}
      />
      <br />
      <Button onClick={addItem}>Save</Button>
    </div>
  );
};
