import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useFetchAll } from "./customHooks";
import NavBar from "./components/layout/Navbar";
import Cart from "./components/layout/Cart";
import { Wrapper } from "./styles/global.styles";
import Commodity from "./components/pages/Commodity";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Footer from "./components/layout/Footer";

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
	const [cart, setCartItem] = useState([] as Item[]);

	const handleAddToCart = (clickedItem: Item) => {
		const checkInCart = cart.find(cartItem => clickedItem.id === cartItem.id)
		if (checkInCart) {
			setCartItem(prev => (prev.map(item => (
				clickedItem.id === item.id ? { ...item, amount: item.amount + 1 } : item
			))))
		} else {
			setCartItem(prev => [{ ...clickedItem, amount: 1 }, ...prev])
		}
	}

	const removeFromCart = (id: string) => { 
		setCartItem(prev => 
			prev.reduce((ack, item) =>{
				if(item.id === id){
					if(item.amount === 1) return ack
					return[ ...ack, { ...item, amount : item.amount -1}]
				}	else{
					return [...ack, item]
				}
			}, [] as Item[])
		)

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
							removeFromCart = {removeFromCart}
						/>} />
					<Route path='/cart' element={<Cart items={cart} handleAddToCart={handleAddToCart} removeFromCart={removeFromCart}/>} />
					<Route path='/commodity/:id' element={<Commodity products={commodities} />} />
					<Route path='/signup' element={< Auth />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;