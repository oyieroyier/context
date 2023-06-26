import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../CartContent';
import { useContext } from 'react';

const Navbar = () => {
	const { item } = useContext(CartContext);
	const { items } = useContext(CartContext);
	console.log(item);
	return (
		<nav className="p-5 flex justify-between items-center bg-red-400">
			<Link to={'/'}>
				{' '}
				<h1 className="text-4xl">Wear</h1>{' '}
			</Link>
			<Link to={'/checkout'}>
				<div className="p-3 flex gap-5 items-center text-3xl">
					<AiFillShopping className="" />
					<span>{items.length}</span>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar;
