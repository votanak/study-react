import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{margin: 14px 0 0 0;
padding: 0;
font-family: "Gill Sans Extrabold", sans-serif}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Global />
		<App />
	</>
);
