import React, { useState } from 'react';

// Button component
function MyButton({ count, handleClick }) {
	// Individual state logic (currently not used)
	// const [count, setCount] = useState(0); // Each button has its own count

	// function handleClick() {
	// 	setCount(count + 1); // Increments individual count
	// 	console.log("Clicked");
	// }

	// Using shared state via props
	return (
		<div>
			<button onClick={handleClick}>Click Here!</button>
			<p>Clicked {count} times</p>
		</div>
	);
}

// Main component
export default function UseState() {
	// Shared state logic
	const [count, setCount] = useState(0); // Shared count

	function handleClick() {
		setCount(count + 1); // Increments shared count
		console.log("Clicked");
	}

	return (
		<div>
            {/* Individual state logic (currently not used) */}
            {/* <MyButton/>
            <MyButton/> */}

			{/* Both buttons update the same count */}
			<MyButton count={count} handleClick={handleClick} />
			<MyButton count={count} handleClick={handleClick} />
		</div>
	);
}
