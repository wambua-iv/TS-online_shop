import { Trending } from "../styles/Commodities.styles";
import Commodities from "./Commodities";
import Drawer from "@mui/material/Drawer"
import Cart from "./Cart";
import { item } from "../App";
import { useState } from "react";
import { Badge, Button } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart"

type Props ={
  items : any ,
  handleAddToCart: (item: item)=> void
  commodities : {
    data : any,
    loading : boolean
  }
}

const TrendingCommodities: React.FC <Props>= ({items, handleAddToCart, commodities}) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
    <Trending>
        <div>
            <h2>You May Like</h2>
        </div>
      <Commodities data={commodities.data} loading={commodities.loading} handleAddToCart = {handleAddToCart}/>
      <Button onClick = {()=>setOpenDrawer(prev => !prev)}> 
        <ShoppingCart>
          <Badge />
        </ShoppingCart>
      </Button>
      <Drawer open =  {openDrawer} anchor = "right"  onClose = {(()=>setOpenDrawer(prev => !prev))}>
          <Cart items = {items} />
      </Drawer>
    </Trending>
  );
};

export default TrendingCommodities;
