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
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 640px){
			display: block;
			top: 0;
			bottom: 0;
            }
        }
       
        .aside{
			display: flex;
			align-items: center;
			flex: 3;
			order: 1;

			@media screen and (max-width: 640px){
				margin-top: -20rem;
				z-index: 100;
				position: relative;
				font-size: 1.15rem;
				margin-left: 1rem;
			}
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

			@media screen and (max-width: 640px){
				img{
					width: 90vw;
				}
			}
        }
`;
