import { useState } from "react";

// export function App() {
// 	const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);

// 	function changeHandler(event) {
// 		setNotes([...notes.slice(0, 1), event.target.value, ...notes.slice(1 + 1)]);
// 	}

// 	const result = notes.map((note, index) => {
// 		<li>
// 			{notes[1]} &nbsp; &nbsp;
// 			<button>Change</button>
// 		</li>;
// 	});

// 	return (
// 		<div>
// 			<ul>{result}</ul>
// 			<input id="input" onChange={changeHandler} value={notes[1]}></input>
// 		</div>
// 	);
// }

export function App() {
	const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
	const [changeIndex, setChangeIndex] = useState();
	const [value, setValue] = useState();
	console.log(changeIndex, typeof changeIndex === "number");

	function changeHandler(event) {
		if (typeof changeIndex === "number") {
			setNotes([
				...notes.slice(0, changeIndex),
				event.target.value,
				...notes.slice(changeIndex + 1),
			]);
		} else {
			setValue(event.target.value);
		}
	}

	const clickHandler = (event, index) => {
		event.preventDefault();
		document.getElementById("input").focus();
		setChangeIndex(index);
	};

	const result = notes.map((note, index) => {
		return (
			<li key={index} onClick={(event) => clickHandler(event, index)}>
				{note} &nbsp; &nbsp;
			</li>
		);
	});

	const blurHandle = () => {
		if (typeof changeIndex === "number") {
			setChangeIndex(undefined);
		} else {
			setNotes([...notes, value]);
		}
		setValue("");
	};

	return (
		<div>
			<ul>{result}</ul>
			<input
				id="input"
				onChange={changeHandler}
				onBlur={blurHandle}
				value={typeof changeIndex === "number" ? notes[changeIndex] : value}
			></input>
		</div>
	);
}
