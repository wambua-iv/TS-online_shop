import styled from "styled-components";

export const Wrapper = styled.div`
    width: 35vw;
    height: 65vh;
    margin: 1rem auto;
    border: 1px solid #9993;
    border-radius: 1rem;

    @media screen and (max-width: 640px){
        width: 80vw;
        height: 64vh;
    }

    input{
        padding-top: 1rem;
        padding-bottom: .5rem;
        border-top: none;
        border-left: none;
        border-right: none;
        position: relative;
        color: #999;
        background-color: white ;

        &:focus {
            outline: none;
        }
    }

    .sign-title {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
    }

    #full-length{
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .small{
        font-size: .825rem;
        margin-top: .5rem ;
    }
`;

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    margin: auto;
    width: 80%;
    height: 80%;
`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    margin: auto;
    width: 80%;
    height: 80%;

    .user-names,
    .passwords{
        width: 100%;
        display: flex;
        justify-content: space-between;

        input{
            width: 46%;
        }

        @media screen and (max-width: 976px){
            display: block;

            input{
                width: 100%;
            }
        }
    }
`;

