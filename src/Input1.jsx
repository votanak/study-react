import { useContext, useState } from "react";
import { myContext } from "./App";

export const Input1 = () => {
	const { value, setValue } = useContext(myContext);
	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};
