import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import imagen from '../images/safeDrive.svg';

const ContenedorHeader = styled.header`
  /* background-image: linear-gradient(to bottom, transparent, teal, transparent); */
  width: 100vw;
  padding-top: 15px;
  font-weight: bold;
  color: whitesmoke;
  margin-top: 0;
  display: flex;
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
const Imagen = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 24vw;
  min-width: 230px;
  margin-top: 0rem;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <Imagen src={imagen} alt="safeDrive logo" />
      {/* <TextoHeader>{titulo}</TextoHeader> */}
    </ContenedorHeader>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
