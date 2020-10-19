import React, { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";

const App = () => {
	const [num, setNum] = useState("");
	const [stored, setStored] = useState("");

	const buttonPress = (button) => {
		if (stored === "" && !isNaN(button)) {
			setStored(button);
		} else if (!isNaN(button)) {
			setStored(stored + button);
		}
	};

	console.log(stored);

	return (
		<div>
			<Display number={stored} />
			<KeyPad buttonPress={buttonPress} />
		</div>
	);
};

export default App;
