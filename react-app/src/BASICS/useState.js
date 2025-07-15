import React, { useState } from 'react';

// Button component
function MyButton() {
	const [count, setCount] = useState(0); // State to track clicks

	function handleClick() {
		setCount(count + 1); // Increase count
		console.log("Clicked");
	}

	// Show the button and click count
	return (
		<div>
			<button onClick={handleClick}>Click Here!</button>
			<p>Clicked {count} times</p>
		</div>
	);
}

// Main component
export default function UseState() {
	return (
		<div>
			<MyButton />
			<MyButton />
		</div>
	);
}
