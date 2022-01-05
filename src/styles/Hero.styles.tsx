import styled from "styled-components";

export const HeroWrapper = styled.div`
        width: 100%;
        height:  30vh;
        border-radius: 2rem;
        display: flex;
        color: black;
        background-color: white;
`;

export const Content = styled.div`
			@media screen and (max-width: 640px){
			display: block;
			top: 0;
			bottom: 0;

                .cart-img{
                img{
					width: 70vw;
					height: 25vh;
					position: relative;
                }
            }
        }

        display: flex;
        justify-content: space-between;
       
  

        .aside{
                display: flex;
                align-items: center;
                flex: 2;
                order: 1;
        }

        .cart-img{
                flex: 3;
                order: 2;
                img{
                        width: 45vw;
                        height: 45vh;
                        position: relative;
                        bottom: 10%;
                }
        }
`;
