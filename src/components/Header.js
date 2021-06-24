import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-image: linear-gradient(to bottom , transparent, teal, transparent);
    width: 100vw;
    padding: 20px;
    font-weight: bold;
    color:whitesmoke;
    margin-top:0
`;
const TextoHeader = styled.h1`
    font-size: 6rem;
    letter-spacing: -5px;
    margin:0;
    font-family:Helvetica, sans-serif;
    text-align:center;
    @media (max-width: 500px){
    font-size: 3rem;
    letter-spacing: -3px;
    }
`;


const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;