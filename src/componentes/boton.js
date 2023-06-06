import React from 'react';
import '../hojas-estilo/boton.css';

function Boton({ texto_boton, esBotonDeClick, manejarClick }){
	return (
		<button
			className={ esBotonDeClick ? 'boton-click':'boton-reiniciar' }
			onClick={ manejarClick }>
			{texto_boton}
		</button>
	);
}

export default Boton;