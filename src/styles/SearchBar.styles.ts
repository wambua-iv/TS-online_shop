import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 50%;
    height: 5rem;
    margin-top: 14rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    border-radius: 15px;
    border: 1px solid #9993;
    position: absolute;

    @media screen and (max-width: 640px){
		width: 80%;
		height: 3.5rem;
		margin-top: 22rem;
		margin-left: 2rem;
    }

    .input-button {
        width: 50px;
        height: 70%;
        margin: auto;

		@media screen and (max-width: 640px){
			width: 30px;
			height: 70%;
			margin: auto;
    }

    .button{
        width: 4rem;
        margin: auto;
        height: 3rem;
        border: 1px solid #9993;
        font-size: 1.5rem;
        border-radius: 1rem;

		@media screen and (max-width: 640px){
			width: 3rem;
			height: 2.5rem;
			
    	}
    }

	
}
`;

export const InputWrap = styled.div`
  width: 100%;
      display: flex;
      position: relative;
      padding-top: .5rem;

      span{
          width: 1px;
          height: 40px;
          color: #000;
          margin: auto .5rem;
          background-color: rgb(170, 170, 170);
      }
`;

export const InputArea = styled.div`
        width:38%;
        height: 70%;
        padding: 0 .5rem 0 .5rem;
        color: black;
        position: relative;

		@media screen and (max-width: 640px){
			width: 70%;
    }

        label{
            padding: .875rem 0;
        }

        input,
        select {
            width: 100%;
            overflow: none;
            border-top: none;
            border-left: none;
            border-right: none;
            position: relative;
            bottom: -20%;
            font-size: 1rem;
            color: #999;
            margin: auto;
            background-color: white ;

          &:focus {
            outline: none;
          }
        }
`;
