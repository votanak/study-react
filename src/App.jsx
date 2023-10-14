import { useState } from "react";

export function App() {
	const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
	const [changeIndex, setChangeIndex] = useState();

	function changeHandler(index) {
		setNotes([
			...notes.slice(0, index),
			notes[index],
			...notes.slice(index + 1),
		]);
	}

	const result = notes.map((note, index) => {
		return (
			<div key={index}>
				<li>
					{note}
					<button onClick={() => setChangeIndex(changeIndex)}>Change</button>
				</li>
			</div>
		);
	});

	return (
		<div>
			<ul>{result}</ul>
			<input onChange={() => changeHandler(changeIndex)}></input>
		</div>
	);
}
