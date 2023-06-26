import { useContext } from 'react';
import { useState } from 'react';
import { AiFillShopping } from 'react-icons/ai';
import { TbJacket } from 'react-icons/tb';
import CartContext from '../CartContent';

const Card = ({ name, price }) => {
	const { addToCart } = useContext(CartContext);
	return (
		<div className="m-3">
			<div className="bg-amber-300 rounded-lg">
				<TbJacket className="p-3 text-9xl" />
			</div>
			<div className="flex justify-between p-2">
				<div>
					<h3>{name}</h3>
					<h4>KES {price}</h4>
				</div>
				<AiFillShopping
					className="text-2xl"
					onClick={() => addToCart(name, price)}
				/>
			</div>
		</div>
	);
};

export default Card;
