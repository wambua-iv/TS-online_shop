import { useState } from "react"
import { Link } from "react-router-dom"
import { Nav, NavWrapper, Logo } from "../../styles/Navbar.styles"
import webby from '../../images/webby-logo.png'
import Buttons from "./Button"



const NavBar = () => {
    const [isUserLogged, setIsUserLogged] = useState(false)
    return (
        <>
            <Nav>
                <NavWrapper>
                    <Logo>
                        <Link to='/'><img src={webby} alt="webby" /></Link>
                    </Logo>
                    <div className="hide-for-mobile">
                        {isUserLogged ? (
                            <div></div>
                        ) : (
                            <Link to='/signup'><Buttons>Sign up</Buttons></Link>
                        )}
                    </div>
                    <div className="hide-for-desktop">

                    </div>
                </NavWrapper>
            </Nav>
        </>
    )
}

export default NavBar;