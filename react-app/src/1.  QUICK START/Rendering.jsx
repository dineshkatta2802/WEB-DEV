import React from 'react';

// Product list
const Products = [
	{ title: 'Cabbage', id: 1, isFruit: false },
	{ title: 'Garlic', id: 2, isFruit: false },
	{ title: 'Apple', id: 3, isFruit: true },
];

export default function Shoppin_List() {
	// Map each product to a <li> element
	const listItems = Products.map(Items => (
		<li
			key={Items.id}
			style={{ color: Items.isFruit ? 'magenta' : 'green' }}
		>
			{Items.title}
		</li>
	));

	return (
		// Render list
		<ul>{listItems}</ul>
	);
}
