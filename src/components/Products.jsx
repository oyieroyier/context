import React from 'react';
import Card from './Card';

const Products = () => {
	const products = [
		{ name: 't-shirt', price: 50 },
		{ name: 'jacket', price: 70 },
		{ name: 'sweater', price: 40 },
		{ name: 'vest', price: 57 },
		{ name: 'jeans', price: 43 },
		{ name: 'jumper', price: 80 },
		{ name: 'hoodie', price: 70 },
	];
	return (
		<div className="flex flex-wrap justify-center mt-10">
			{products.map((product, index) => (
				<Card key={index} name={product.name} price={product.price} />
			))}
		</div>	
	);
};

export default Products;
