import { useFetchAll } from "../../customHooks";
import ItemsSection from "../layout/ItemsSection";
import Hero from "../layout/Hero";
import { Item } from '../../App'

interface Props {
    handleAddToCart: (CartItem: Item) => void;
    getTotalItems : (CartItem : Item[]) => number;
    cart: Item[]
  }

const Home: React.FC<Props> = ({handleAddToCart, cart, getTotalItems}) => {
    const commodities = useFetchAll("products", "store");

    return(
      <div className="container">
      <Hero />
      <ItemsSection handleAddToCart={handleAddToCart} cart={cart} commodities={commodities} getTotalItems={getTotalItems} />
      </div>
    )
  }

  export default Home;