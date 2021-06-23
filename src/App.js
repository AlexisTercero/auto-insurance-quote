import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import road from "./images/road.jpg"

const Road = styled.div `
  height: 100vh;
  width: 100%;
`

const Contenedor = styled.div`
  max-width: 600px;
  margin: 6vh auto;
  @media (max-width: 600px) {
    max-width: 300px;
    margin: 3vh auto;
  }
  @media (max-width: 300px) {
    max-width: 290px;
  }
`;
const ContenedorFormulario = styled.div`
  background-color: rgba(255,255,255,0.05);
  backdrop-filter: blur(15px);
  padding: 3rem;
  border-radius: 6px;
  @media (max-width: 500px) {
    padding: 1.5rem;
    max-height: 75vh;
  }
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    },
  });
  //State Spinner

  const [cargando, guardarCargando] = useState(false);

  // Extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Fragment>
      <Road style={{ backgroundImage: `url(${road})` }}>
      <Header titulo="safeCar => " />
      <Contenedor>
        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />

          {cargando ? <Spinner /> : null}

          {!cargando ? <Resumen datos={datos} /> : null}

          {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
        </ContenedorFormulario>
      </Contenedor>
      </Road>
    </Fragment>
  );
}

export default App;
