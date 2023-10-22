import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalTitle } from "react-bootstrap";

// const PopUp = (show, setShow) => {
// 	return (

// 	);
// };

export const App = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<p>нечто</p>
			<Button onClick={() => setShow(true)}>показать Modal</Button>
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<ModalTitle>Это мой попап</ModalTitle>
				</Modal.Header>
			</Modal>{" "}
		</div>
	);
};
