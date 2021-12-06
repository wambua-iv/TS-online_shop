
import { item } from "../App"
import { CartWrapper } from "../styles/Cart.style"

type Props ={
    items : item[]
}
 
const Cart: React.FC<Props> = ({items}) => {
    return (
        <CartWrapper>
            {items.map(item =>(
                <div>
                    {item.title}
                </div>
            ))}
        </CartWrapper>
    )
}

export default Cart
