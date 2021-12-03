import {Nav, NavWrapper, Logo} from "../styles/Navbar.styles"

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavWrapper>
                        <Logo>
                            Webby Shopper
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