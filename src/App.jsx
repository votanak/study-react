import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalTitle } from "react-bootstrap";

const PopUp = ({ show, setShow }) => {
	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<ModalTitle>This is my PopUp</ModalTitle>
			</Modal.Header>
		</Modal>
	);
};

export const App = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<p>Press a button to show Modal</p>
			<Button onClick={() => setShow(true)}>Open Modal</Button>
			<PopUp show={show} setShow={setShow}></PopUp>
		</div>
	);
};
