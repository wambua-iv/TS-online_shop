import { useState } from "react";
import { useFetchAll } from "./customHooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import TrendingCommodities from "./components/TrendingCommodities";
import Cart from "./components/Cart";
import { Wrapper } from "./styles/global.styles";

export type item = {
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
  const [cart, addToCart] = useState([] as item[]);

  const handleAddToCart = (clickedItem: item) => {
    addToCart((prev) => {
      const checkInCart = prev.find(item => item.id === clickedItem.id)
      if (checkInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? { ...item, amount: +1 } : item
        ))
      }
      return [...prev, { ...clickedItem }]
    })
  }

  return (
    <>
      <Wrapper />
      <NavBar />
      <Router>
        <Hero />
        <Categories />
        <TrendingCommodities handleAddToCart={handleAddToCart} items={cart} commodities={commodities} />
        <Routes>
          <Route path="/cart" element={<Cart items={cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;