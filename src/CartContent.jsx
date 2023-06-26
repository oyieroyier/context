import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);

	const addToCart = (name, price) => {
		setItems((previousState) => [...previousState, { name, price }]);
	};
	return (
		<CartContext.Provider value={{ items, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
