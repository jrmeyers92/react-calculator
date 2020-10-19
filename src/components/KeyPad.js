import React from "react";

const KeyPad = (props) => {
	const buttPress = (e) => {
		props.buttonPress(e.target.innerHTML);
	};

	return (
		<div className='keys'>
			<button onClick={buttPress}>0</button>
			<button onClick={buttPress}>1</button>
			<button onClick={buttPress}>2</button>
			<button onClick={buttPress}>3</button>
			<button onClick={buttPress}>4</button>
			<button onClick={buttPress}>5</button>
			<button onClick={buttPress}>6</button>
			<button onClick={buttPress}>7</button>
			<button onClick={buttPress}>8</button>
			<button onClick={buttPress}>9</button>
			<button onClick={buttPress}>+</button>
			<button onClick={buttPress}>-</button>
			<button onClick={buttPress}>/</button>
			<button onClick={buttPress}>X</button>
			<button onClick={buttPress}>Clear</button>
			<button onClick={buttPress}>Submit</button>
			<button onClick={buttPress}>Backspace</button>
		</div>
	);
};

export default KeyPad;
