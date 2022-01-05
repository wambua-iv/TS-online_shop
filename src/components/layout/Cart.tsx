import { Item } from "../../App"
import { CartItem, CartWrapper } from "../../styles/Cart.style"
import { Button as Btn  } from '@mui/material';
import img from '../../images/cart.jpg'

type Props = {
    items: Item[],
    handleAddToCart: (CartItem: Item) => void;
}

const Cart: React.FC<Props> = ({ items, handleAddToCart }) => {
    const getItemTotal = (price: number, amount: number) => price * amount;
    const removeCartItem = () => null;
    const getCartTotal = (items: Item[]) => null;

    return (
        <CartWrapper>
            <h3>Your Shopping Cart</h3>
            {items.map(item => (
                <CartItem key={item.id}>
                    <div className="content-area">
                    <span className="title">{item.title}</span>
                    <div className="price-area">
                        <p><span>Price:</span> {item.price} </p>
                        <p><span>Total:</span> {getItemTotal(item.price, item.amount)} </p>
                    </div>
                    <div className="amnt-area">
                    <Btn style={{fontSize: 20}}>-</Btn>
                    <span>{item.amount}</span>
                    <Btn 
                        style={{fontSize: 20}}
                        onClick={(()=> handleAddToCart(item))}>
                            +
                    </Btn>
                    </div>
                    </div>
                    <div className="item-img">
                        {/* <img src={item.image} alt={item.title} /> */}
                        <img src={img} alt={item.title} /> 
                    </div>
                </CartItem>
            ))}
        </CartWrapper>
    )
}

export default Cart
