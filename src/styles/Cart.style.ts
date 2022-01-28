import styled from "styled-components";

export const CartWrapper = styled.div`
    width:  500px;
    color: #000;
    height: 100%;
    margin-top: 1rem;

    @media screen and (max-width : 769px){
		            width: 80vw;
            }

    h3{
        text-align: center;
    }
`;

export const CartItem = styled.div`
    width: 90%;
    height: 15vh;
    margin: .5rem auto;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid #9993;
    border-radius: 1rem;

    .content-area{
        width: 60%;

        @media screen and (max-width : 769px){
		            width: 90%;
                    margin: 0 auto;
            }

        .title{
            font-weight: 500;
        }

        .amnt-area,
        .price-area{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }
        
    }

    .item-img{
        width: 35%;

        img{
            width: 100%;
            height: 100%;
        }
    }


`