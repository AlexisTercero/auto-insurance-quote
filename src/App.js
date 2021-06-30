import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import road from './images/road.jpg';
import roadvideo from './images/roadvideo.mp4';
import Footer from './components/Footer';

const Road = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 500px) {
  }
`;

const Video = styled.video`
  opacity: 0.75;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Contenedor = styled.div`
  max-width: 60vw;
  margin: 3vh auto;
  flex: 1;
  @media (max-width: 600px) {
    max-width: 300px;
    margin: 1vh auto;
  }
`;
const ContenedorFormulario = styled.div`
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(21px);
  padding: 3rem;
  border-radius: 9px;
  min-width: 25vw;
  min-height: 50vh;
  margin: 10px;
  @media (max-width: 500px) {
    padding: 1.6rem;
    border-radius: 6px;
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
    <Road /* style={{ backgroundImage: `url(${road})` }} */>
      <Video className="videoTag" autoPlay loop muted>
        <source src={roadvideo} type="video/mp4" />
      </Video>
      <Header titulo="safeDrive " />
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
      <Footer />
    </Road>
  );
}

export default App;
