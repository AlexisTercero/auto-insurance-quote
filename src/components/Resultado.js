import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
  background-color: transparent;
  margin-top: 2rem;
  padding: 1rem;
  color: white;
  text-align: center;
  border: 1px solid teal;
  @media (max-width: 600px) {
    font-size: 12px;
    letter-spacing: -0.5px;
  }
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 3px solid teal;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Chose brand, model year and a plan</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>
            total : $ <span> {cotizacion} </span>{' '}
          </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
