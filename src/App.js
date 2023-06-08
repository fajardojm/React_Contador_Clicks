import './App.css';
import ieslaveredalogo from './imagenes/ieslavereda.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='ieslavereda-logo-contenedor'>
        <img 
          className='ieslavereda-logo'
          src={ieslaveredalogo}
          alt='Logo de IES La Vereda' />
      </div>
      <div className="contenedor-principal">
      <Contador numClicks= { numClicks } />      
        <Boton 
          texto_boton='Click'
          esBotonDeClick={ true }
          manejarClick={ manejarClick } />
        <Boton
          texto_boton='Reiniciar'
          esBotonDeClick={ false }
          manejarClick={ reiniciarContador } />
      </div>
      
    </div>
  );
}

export default App;
