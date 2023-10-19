import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalTitle } from "react-bootstrap";

const PopUp = (show, handleClose) => {
	<Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
			<ModalTitle>Это мой попап</ModalTitle>
		</Modal.Header>
	</Modal>;
};

export const App = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<div>
			<p>нечто</p>
			<Button onClick={handleShow}>показать Modal</Button>
			<PopUp show={show} handleClose={handleClose} />
		</div>
	);
};
