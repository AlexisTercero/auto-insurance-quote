import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { obtenerDiferenciaYear, calculaMarca, obtenerPlan } from '../helper';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  color: white;
  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    font-size: 12px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
const Label = styled.label`
  flex: 0 0 30px;
  color: white;
  margin-right: 0;
  @media (max-width: 600px) {
    flex: 0 0 30px;
    font-size: 12px;
  }
  @media (max-width: 300px) {
    flex: 0 0 10px;
  }
`;
const Select = styled.select`
  background-color: rgba(255, 255, 255, 0.1);
  color: yellow;
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid white;
  -webkit-appearance: none;
  margin-bottom: 12px;
  @media (max-width: 600px) {
    height: 39px;
    padding: 0.6rem;
    font-size: 12px;
  }
`;
const InputRadio = styled.input`
  margin: 0 1rem;
  @media (max-width: 600px) {
    margin: 0 0.6rem;
  }
`;
const Boton = styled.button`
  background-color: yellow;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border: 3px solid yellow;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  border-radius: 50px;
  transition: 250ms;

  &:hover {
    background-color: transparent;
    color: white;
    border: 3px solid yellow;
    letter-spacing: 1px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    height: 30px;
    font-size: 12px;
    padding: 9px;
    margin-top: 0.6rem;
  }
`;
const Error = styled.div`
  background-color: rgba(255, 0, 0, 0.6);
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  border: none;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });
  //comprobar error campos vacios

  const [error, guardarError] = useState(false);

  //extraer los valores del state

  const { marca, year, plan } = datos;

  //leer los datos del formulario y colocarlos en el state
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  // cuando el usuario presiona submit/cotizar
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    //Una base de 2000
    let resultado = 2000;

    //Obtener diferencia de año
    const diferencia = obtenerDiferenciaYear(year);

    // Por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    //Americano 15%
    //Asiatico 5%
    //Esuropeo 30%
    resultado = calculaMarca(marca) * resultado;

    //Basico aumenta 20%
    //Completo aumenta 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2); // estos metodos limitan la cantidad de decimales a 2.
    guardarCargando(true);

    setTimeout(() => {
      //Elimina el spinner
      guardarCargando(false);
      //Pasa la info al componente principal
      //Total
      guardarResumen({
        cotizacion: Number(resultado),
        datos,
      });
    }, 3000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>All fields are required</Error> : null}
      <Campo>
        {/* <Label>Marca: </Label> */}
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">Select Brand</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        {/* <Label>Año: </Label> */}
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan: </Label>
        <InputRadio
          type="radio"
          name="plan"
          value="básico"
          checked={plan === 'básico'}
          onChange={obtenerInformacion}
        />{' '}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={obtenerInformacion}
        />{' '}
        Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired,
};

export default Formulario;
