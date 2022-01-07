import { Content, HeroWrapper } from "../../styles/Hero.styles"
import shopCart from '../../images/cart.jpg'
import SearchBar from "./SearchBar"
import Buttons from "./Button"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <HeroWrapper >
            <Content >
            <div className="cart-img">
                    <img src={shopCart} alt='shopping cart' />
                </div>

               <div className="aside">
                   <div>
                    <h1>Buy and Sell with <span style={{color: 'yellow'}}>Webby</span>.</h1>
                    <p>Your One-Stop-Online-Shop for all your shopping needs </p>
                    <div className="hide-for-desktop">
                        <Link to='/signup'>Sign up</Link>
                    </div>
                   </div>
               </div>
            </Content>
            <SearchBar />

        </HeroWrapper>
    )
}

export default Hero
