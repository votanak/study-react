import { useState } from "react";
import { createContext } from "react";
import { Container } from "./Container";

export const myContext = createContext();

function App() {
	const [value, setValue] = useState("");

	return (
		<div>
			<myContext.Provider value={{ value, setValue }}>
				<Container />
				<p></p>
			</myContext.Provider>
		</div>
	);
}

export default App;
