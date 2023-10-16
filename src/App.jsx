import { useState } from "react";

const changeId = "JAmjRlfQT8rLTm5tG2m1L";

const newedElem = {
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

	const changeElem = () => {
		const copy = [];
		notes.map((note) => {
			if (note.id === changeId) {
				note = { ...newedElem };
			}
			copy.push(note);
		});
		setNotes(copy);
	};

	const result = notes.map((note) => {
		return (
			<h4 key={note.id}>
				<p>{note.id}</p>
				<span>{note.prop1}</span>, &nbsp; <span>{note.prop2}</span>, &nbsp;
				<span>{note.prop3}</span>
			</h4>
		);
	});

	return (
		<div>
			{result}
			<button onClick={changeElem}>Change Elem</button>
		</div>
	);
}
