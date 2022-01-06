import styled from "styled-components"

export const ItemWrapper = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: space-between;

    .item-img{
        width: 50%;
        height: 80%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .item-content{
        width: 45%;
        height: 80%;
    }
`;

