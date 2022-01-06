import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 45vh;
    background-color: #071227;
    color: #fff;

    span{
		font-size: 1.5rem
        color: #fff;
        margin: auto .5rem;
	} 
`;

export const FooterWrapper = styled.div`
    display: flex;


    .footer-col-1{
        width: 40vw;
        height: 32vh;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        .logo{

            img{
                width: 100px;
                height: 80px;
            }

        }
    }

`;