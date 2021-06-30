import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
  background-color: transparent;
  margin-top: 0rem;
  padding: 0rem;
  color: white;
  text-align: center;
  border: none;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 2px solid teal;
  background-color: teal;
  margin-top: 0.5rem;
  position: relative;
  border-radius: 5px;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  margin: 0;

  @media (max-width: 600px) {
    padding: 0;
    font-size: 14px;
  }
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje></Mensaje>
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
