import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useFetchAll } from "./customHooks";
import NavBar from "./components/layout/Navbar";
import Cart from "./components/layout/Cart";
import { Wrapper } from "./styles/global.styles";
import Commodity from "./components/pages/Commodity";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";

export type Item = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image?: string;
	retailer?: string;
	amount: number
};

const App: React.FC = () => {
	const commodities = useFetchAll("products", "store");
	const [cart, addToCart] = useState([] as Item[]);

	const handleAddToCart = (clickedItem: Item) => {
		const checkInCart = cart.find(cartItem => clickedItem.id === cartItem.id)
		if (checkInCart) {
			addToCart(prev => (prev.map(item => (
				clickedItem.id === item.id ? { ...item, amount: item.amount + 1 } : item
			))))
		} else {
			addToCart(prev => [{ ...clickedItem, amount: 1 }, ...prev])
		}
	}

	const getTotalItems = (items: Item[]) => items.reduce((ack: number, item) => ack + item.amount, 0)
	return (
		<>
			<Wrapper />
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={
						<Home
							handleAddToCart={handleAddToCart}
							cart={cart}
							getTotalItems={getTotalItems}
							commodities={commodities}
						/>} />
					<Route path='/cart' element={<Cart items={cart} handleAddToCart={handleAddToCart} />} />
					<Route path='/commodity/:id' element={<Commodity products={commodities} />} />
					<Route path='/signup' element={< Auth />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;