import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 2rem auto;
    justify-content: space-between;

    .title{
        height: 1.5rem;
        padding: 1rem;
        border: 1px solid #9993;
        border-radius: 1rem;
    }
`;

export const AdSection = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    .ad-item{
        height: 30vh;
        background-color: aqua;
        border-radius: 1rem;

    }
`;
