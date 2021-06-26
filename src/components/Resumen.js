import React from 'react';
import styled from "@emotion/styled";
import { primerMayuscula } from "../helper";
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 0.9rem;
    text-align: center;
    background-image: radial-gradient(
      circle at 200% 200%,
      #008475 6%,
      rgba(255, 255, 255, 0) 10%
    ),
    radial-gradient(#39e8c2 14%, rgba(255, 255, 255, 0) 94%),
    radial-gradient(circle at -93% -200%, #033e47 100%, rgba(184, 2, 2, 0) 10%);
    color: black;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;
    if(marca ==="" || year === "" || plan === "") return null;

    return(
        <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)} </li>
            <li>Plan: {primerMayuscula(plan)} </li>
            <li>Año del auto: {year} </li>
        </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;