import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { CartProvider } from './CartContent';

export default function App() {
	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}
