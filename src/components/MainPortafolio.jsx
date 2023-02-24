import veterinaria from '../img/veterinaria__react.png';
import gifs from '../img/gifs__react.png';
// import encriptador from '../img/encriptador__js.png';
import cripto from '../img/criptos_react.png';
import ahorcado from '../img/ahorcado__js.png';
import blackjack from '../img/blackjack__js.png';
import nucleus from '../img/nucleus__html.png';
import muebles from '../img/muebles__html.png';
import festival from '../img/festival__html_js.png';

// Funciones

import {
	proVeterinaria,
	proGifs,
	proCripto,
	proAhorcado,
	proBlackJack,
	proNucleus,
	proMuebles,
	proFestival,
} from './FuncionesPortafolio';

export const MainPortafolio = () => {
	return (
		<div className='contenedor portafolio' id='portafolio'>
			<h2 className='portafolio__titulo'>Proyectos</h2>
			<p className='portafolio__descripcion'>
				Una seleccion de proyectos que he construido.
			</p>

			<div className='portafolio__grid'>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>Aministrador de Pacientes</p>
					<img
						src={veterinaria}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proVeterinaria}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>Buscador de Gifs</p>
					<img src={gifs} alt='Imagen proyecto' className='portafolio__imagen' />
					<button type='button' onClick={proGifs} className='portafolio__boton'>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>Encriptador de Textos</p>
					<img
						src={cripto}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button type='button' onClick={proCripto} className='portafolio__boton'>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>Juego del Ahorcado</p>
					<img
						src={ahorcado}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proAhorcado}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>BlackJack 21</p>
					<img
						src={blackjack}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proBlackJack}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>E-wallet Nucleus</p>
					<img
						src={nucleus}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proNucleus}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>E-commerce de Muebles</p>
					<img
						src={muebles}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proMuebles}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
				<div className='portafolio__proyecto'>
					<p className='portafolio__subtitulo'>Festival de Música</p>
					<img
						src={festival}
						alt='Imagen proyecto'
						className='portafolio__imagen'
					/>
					<button
						type='button'
						onClick={proFestival}
						className='portafolio__boton'
					>
						Mas Información
					</button>
				</div>
			</div>
		</div>
	);
};
