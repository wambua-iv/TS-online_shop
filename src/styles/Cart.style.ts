import styled from "styled-components";

export const CartWrapper = styled.div`
    width:  500px;
    color: #000;
    height: 100%;
    margin-top: 1rem;

    h3{
        text-align: center;
    }
`;

export const CartItem = styled.div`
    width: 90%;
    margin: .5rem auto;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid #9993;
    border-radius: 1rem;

    .content-area{
        width: 60%;

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