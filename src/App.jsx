import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const newElem = {
	id: "GMNCZnFT4rbBP6cirA0Ha",
	prop1: "value41",
	prop2: "value42",
	prop3: "value43",
};

export function App() {
	const [notes, setNotes] = useState([
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
	]);

	const AddNewElem = () => {
		const veryNewElem = { ...newElem, ["id"]: uuidv4() };
		setNotes([...notes, veryNewElem]);
	};

	const result = notes.map((note) => {
		return (
			<p key={note.id}>
				<p>{note.id}</p>
				<span>{note.prop1}</span>,<span>{note.prop2}</span>,
				<span>{note.prop3}</span>
			</p>
		);
	});

	return (
		<div>
			{result}
			<button onClick={AddNewElem}>Add newElem</button>
		</div>
	);
}
