import { Items } from "../../styles/Commodities.styles";
import Commodities from "./Commodities";
import Drawer from "@mui/material/Drawer"
import Cart from "./Cart";
import { useState } from "react";
import { Badge, Button } from "@mui/material";
import { Item } from "../../App";
import Buttons from "./Button";
import { AddShoppingCartOutlined } from "@mui/icons-material";

type Props = {
  cart: Item[];
  handleAddToCart: (CartItem: Item) => void;
  removeFromCart: (id: string) => void;
  getTotalItems : (CartItem : Item[]) => number;
  commodities: {
	data: Item[] | [],
	loading: boolean
  }
}

const ItemsSection: React.FC<Props> = ({ cart, handleAddToCart, removeFromCart, commodities, getTotalItems }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
	<Items>
	  <div className="title-area">
		<h2>Find The Best of Products with <span style={{ color: 'orange' }}>Webby</span>.</h2>
		<div>
		  <Button onClick={() => setOpenDrawer(prev => !prev)}>
			<Badge badgeContent={getTotalItems(cart)} color="error">
				<AddShoppingCartOutlined />
			</Badge>
		  </Button>
		</div>
	  </div>
	  <div className="display">
		<Commodities data={commodities.data} loading={commodities.loading} handleAddToCart={handleAddToCart} />

	  </div>
	  <Drawer open={openDrawer} anchor="right" onClose={(() => setOpenDrawer(prev => !prev))}>
		<Cart 
			items={cart} 
			handleAddToCart={handleAddToCart}
			removeFromCart = {removeFromCart}			
			/>
	  </Drawer>
	  <div className="btn-area"><Buttons>Load More</Buttons></div>
	</Items >
  );
};



export default ItemsSection;
