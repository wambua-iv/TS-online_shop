import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
        padding: 1rem;
        border: 1px solid #9993;
        border-radius: 1rem;
        max-width: 6rem;

        &:hover{
            background-color: #9995;
        }
`;

interface Props {
    children : any;
  }

const Buttons: React.FC <Props>= ({children}) => {
    return (
        <Btn>
            {children}
        </Btn>
    )
}

export default Buttons