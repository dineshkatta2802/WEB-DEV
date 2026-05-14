import React from 'react';

// Button component
function MyButton(params) {
	// Click handler function
	function handleClick(params) {
		console.log("Clicked the button");
	}

	// Button with onClick event
	return <button onClick={handleClick}>Click Here!</button>;
}

// Main component
export default function EventHandling() {
	return (
		<div>
			<MyButton />
		</div>
	);
}
