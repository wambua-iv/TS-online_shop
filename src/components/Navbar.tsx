import {Nav, NavWrapper, Logo} from "../styles/Navbar.styles"
import webby from '../images/webby-logo.png'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavWrapper>
                        <Logo>
                            <img src= {webby}/>
                        </Logo>
                        <div className = "hide-for-mobile">
                            <button>
                                Sign up
                            </button>
                        </div>
                        <div className = "hide-for-desktop">

                        </div>
                </NavWrapper>
            </Nav>
        </>
    )
}

export default  NavBar