import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalTitle } from "react-bootstrap";

const PopUp = (show, setShow) => {
	const [show, setShow] = useState(show);
	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<ModalTitle>Это мой попап</ModalTitle>
			</Modal.Header>
		</Modal>
	);
};

export const App = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<p>нечто</p>
			<Button onClick={() => setShow(true)}>показать Modal</Button>
			<PopUp show={show} handleClose={setShow} />
		</div>
	);
};
