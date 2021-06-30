import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
  padding: 0.9rem;
  text-align: center;
  background-color: transparent;
  border: 2px solid teal;
  color: whitesmoke;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  //extraer datos
  const { marca, year, plan } = datos;
  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Brand: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)} </li>
        <li>Year: {year} </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
