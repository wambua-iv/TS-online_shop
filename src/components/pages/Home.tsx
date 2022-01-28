import ItemsSection from "../layout/ItemsSection";
import Hero from "../layout/Hero";
import { Item } from '../../App'
import WhyWebby from "../layout/WhyWebby";

interface Props {
		handleAddToCart: (CartItem: Item) => void;
		removeFromCart: (id: string) => void;
		getTotalItems : (CartItem : Item[]) => number;
		cart: Item[],
		commodities: {
			data: Item[]| [],
			loading: boolean
		}
	}

const Home: React.FC<Props> = ({handleAddToCart, removeFromCart, cart, getTotalItems, commodities}) => {
		

		return(
			<div className="container">
		<Hero />
		<ItemsSection 
			handleAddToCart={handleAddToCart} 
			cart={cart} 
			commodities={commodities} 
			getTotalItems={getTotalItems}
			removeFromCart = {removeFromCart}
			/>
		<WhyWebby />
			</div>
		)
	}

	export default Home;