import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: black;
    width: 100vw;
    padding: 20px;
    font-weight: bold;
    color:#FFFFFF;
    margin-top:0
`;
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family:Helvetica, sans-serif;
    text-align:center;
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