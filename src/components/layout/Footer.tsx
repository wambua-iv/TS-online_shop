import { FooterWrapper, Wrapper } from "../../styles/Footer.styles";
import Webby from '../../images/webby-logo.png'
import { CopyrightOutlined, FacebookRounded, Instagram } from "@mui/icons-material";

const Footer = () => {
    return (
        <Wrapper>
        <FooterWrapper>
            <div className="footer-col-1">
                <div className="logo">
                    <img src={Webby} alt='Webby' />
                </div>
                <div>
                    <h2>A new normal to shopping, Seamless, Simple &  Fast</h2>
                </div>
                <div>
                    <FacebookRounded />
                    <Instagram />
                </div>
            </div>
            <div className="footer-col-2 hide-for-mobile">
                <h3>Why Choose Webby</h3>
                <p><a href=" ">Large products catalogue</a></p>
                <p><a href=" ">Flexible payment </a></p>
                <p><a href=" ">Affordable delivery fees</a></p>

            </div>
            <div className="footer-col-3  hide-for-mobile">
            <h3>Help</h3>
                <p><a href=" ">About</a></p>
                <p><a href=" ">Contact us </a></p>
                <p><a href=" ">FAQs</a></p>

            </div>
        </FooterWrapper>
        <hr className="container"/>
        <div style={{textAlign: 'center'}}>Coded by Wambua  <span>|</span> <CopyrightOutlined /> 2022. Webby</div>
        </Wrapper>
    )
}

export default Footer
