//import { useState } from "react";
import { ItemWrapper } from "../../styles/Commodity.styles";
import { useParams } from 'react-router-dom';
import { Item } from "../../App";
import ItemImg from"../../images/cart.jpg"


// interface data{
// 	products:{
// 		data: Item[] |null
// 	}
// }

const Commodity = (props: any) => {
	const { id } = useParams();
	//const [addToWishList, setAddToWishList] = useState(false)
	const product =  props.products.data?.filter( (item: Item) => String(item.id) === id  )
	console.log(product)
	return (
		product?.map((item: Item) => (
			<ItemWrapper key={item.id}>
				<div className="item-img">
					{/* <img src={item.image} alt={item.title} /> */}
					<img src={ItemImg} alt={item.title} />
				</div>
				<div className="item-content">
					<h3>{item.title}</h3>
					<div className="description" >
						{item.description}
					</div>
				</div>
			</ItemWrapper>
		))       
	 
	)
}

export default Commodity;
