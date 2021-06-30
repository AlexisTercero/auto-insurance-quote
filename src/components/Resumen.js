import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
  padding: 0.3rem;
  text-align: center;
  background-color: transparent;
  border: none;
  color: whitesmoke;
  margin-top: 0.5rem;
`;

const Resumen = ({ datos }) => {
  //extraer datos
  const { marca, year, plan } = datos;
  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Quote Summary</h2>
      <ul>
        <li>
          {' '}
          {primerMayuscula(marca)} {year}{' '}
        </li>
        <li> {primerMayuscula(plan)} plan </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
