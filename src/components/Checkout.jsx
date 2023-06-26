import React from 'react';
import { useContext } from 'react';
import CartContext from '../CartContent';

const Checkout = () => {
	const { items } = useContext(CartContext);
	return (
		<div>
			{items.map((item) => (
				<>
					<h2>{item.name}</h2>
					<h3>{item.price}</h3>
				</>
			))}
		</div>
	);
};

export default Checkout;
