import styled from "styled-components";

export const Items = styled.div`
margin: 7rem auto ;

.title-area{
  display: flex;
  justify-content: space-between;
}

.btn-area{
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
}

`;

export const CommoditiesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  a {
      text-decoration: none;
      color:  #0009;

      &:hover{
        transform: scale(1.025);
      }
    }


    @media screen and (max-width: 640px){
      width: 80%;
      margin: auto;
      grid-template-columns: repeat(1, 1fr);
    }

  .item {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #9992 ;
    border-radius: 15px;

    .item-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

   .item-img{
    background-color: white ;
    width: 100%;
    height: 100%;
    display: flex;

    img {
        width: 14rem;
        max-height: 12rem;
        margin: .25rem  auto;
      }
   }
      .content {
        padding: 0.325rem;
        display: flex;
        flex-direction: column;
        font-size: .725rem;

        .price {
          display: flex;
          justify-content: flex-end;
          font-size: .975rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export const CommodityWrapper = styled.div``;
