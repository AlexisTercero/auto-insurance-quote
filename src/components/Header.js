import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
  background-image: linear-gradient(to bottom, transparent, teal, transparent);
  width: 100vw;
  padding: 20px;
  font-weight: bold;
  color: whitesmoke;
  margin-top: 0;
`;
const TextoHeader = styled.h1`
  font-size: 6rem;
  letter-spacing: -5px;
  text-shadow: 10px 7px 7px rgba(217, 149, 226, 0.25),
    3px 3px 3px hsla(211, 100%, 90%, 0.47),
    -14px -5px 7px hsla(186, 0%, 100%, 0.13);
  margin: 0;
  font-family: Helvetica, sans-serif;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 3rem;
    letter-spacing: -3px;
  }
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
