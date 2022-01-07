import styled from "styled-components"

 export const Nav = styled.nav`
    width: 100%;
    margin-top: .5rem;
    position: relative;
    z-index: 100;
    background-color: white ;

 `;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.725rem;
    font-weight: 600;

    img{
        width: 100px;
        height: 80px;
    }
`;