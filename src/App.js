import './App.css';
import ieslaveredalogo from './imagenes/ieslavereda.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';

function App() {

  const manejarClick = () => {
    console.log('Click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
      <Contador numClicks='5' />      
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
