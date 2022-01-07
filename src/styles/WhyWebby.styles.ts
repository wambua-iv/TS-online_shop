import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 2rem auto;
    justify-content: space-between;

    @media screen and (max-width: 640px){
        display: block ;
    }

    .title{
        width: 10rem;
        height: 1.5rem;
        padding: 1rem;
        border: 1px solid #9993;
        border-radius: 1rem;
        margin: .5rem auto;
    }
`;

export const AdSection = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 640px){
      width: 80%;
      margin: auto;
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }

    .article-item{
        width: 90%;
        padding: .5rem;
        height: 30vh;
        margin: 0 auto;
        border-radius: 1rem;
        border: 1px solid #9993;
        background-color: #e9e9e9;

        .description{
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            margin-top: 1rem;
        }

        .icon{
            width: 1.5rem;
            color: orange;
            margin: .725rem;
            padding: 1rem;
            border-radius: 50%;
        }

        &:hover{
            background-color: #0005;

            .icon{
                color: white;
                background-color: orange;                
            }
        }
    }
`;
