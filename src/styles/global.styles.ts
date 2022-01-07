import {createGlobalStyle} from "styled-components"

export const Wrapper = createGlobalStyle`
    body{
        box-sizing:border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding:  0;
        margin: 0 auto;
        background-color: white;

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

        .container{
            @media screen and (min-width: 1024px){
                max-width: 1024px;
                margin: 0 auto;
            }
        }
    }

    a{
            text-decoration: none;
            color: #000;
        }
`;