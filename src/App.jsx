import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const initProds = [
	{ id: uuidv4(), name: "prod1", catg: "catg1", cost: 100 },
	{ id: uuidv4(), name: "prod2", catg: "catg2", cost: 200 },
	{ id: uuidv4(), name: "prod3", catg: "catg3", cost: 300 },
];

export const App = () => {
	return (
		<Table>
			{initProds.map((el) => (
				<Row key={el.id}>
					<Col>{el.name}</Col>
					<Col>{el.catg}</Col>
					<Col>{el.cost}</Col>
				</Row>
			))}
		</Table>
	);
};
