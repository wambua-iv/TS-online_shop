import styled from "styled-components";

export const Trending = styled.div``;

export const CommoditiesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  a {
      text-decoration: none;
      color:  #999;

      &:hover{
        transform: scale(1.005);
      }
    }
  .item {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border: 0.002rem solid #9995;
    border-radius: 15px;

    .item-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      img {
        width: 100%;
        max-height: 200px;
        border-radius: 15px 15px 0 0;
      }

      .content {
        padding: 0.325rem;
        display: flex;
        flex-direction: column;
        font-size: .725rem;

        .spacing {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
`;

export const CommodityWrapper = styled.div``;
