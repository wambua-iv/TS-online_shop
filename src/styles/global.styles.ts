import {createGlobalStyle} from "styled-components"

export const Wrapper = createGlobalStyle`
    body{
        box-sizing:border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding:  0;
        max-width: 1024px;
        margin: 0 auto;

        .hide-for-mobile{
            @media screen and (max-width : 769px){
		            display: none;
            }
        }

        .hide-for-desktop{
            @media screen and (min-width: 768px){
		            display: none;
	        }
        }
    }
`;