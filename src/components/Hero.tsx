import { Content, HeroWrapper, InputArea } from "../styles/Hero.styles"
import shopCart from '../images/cart.jpg'

const Hero = () => {
    return (
        <HeroWrapper >
            <Content >
               <div>
               <h2>Buy and Sell with Webby.</h2>
                <p>Your One-Stop-Online-Shop for all your shopping needs </p>
               </div>

                <div className="cartimg">
                    <img src={shopCart} alt='shopping cart' />
                </div>
            </Content>

            <InputArea>

            </InputArea>
        </HeroWrapper>
    )
}

export default Hero
