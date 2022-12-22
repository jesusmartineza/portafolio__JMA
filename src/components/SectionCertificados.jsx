import java from '../img/Java y BlueJ  Introducción a las Bases de la Programación.jpg';
import html1 from '../img/htmlycss_1.png';
import html2 from '../img/htmlycss_2.png';
import logica1 from '../img/logica_1.png';
import logica2 from '../img/logica_2.png';
import logica3 from '../img/logica_3.png';
import js from '../img/Javascript Moderno Guia para dominar el lenguaje.jpg';
import generation from '../img/generation__java.png';

// Funciones
import { cerJava } from './FuncionesCertificados';
import { cerJs } from './FuncionesCertificados';
import { cerGeneration } from './FuncionesCertificados';
import { cerHtml1 } from './FuncionesCertificados';
import { cerHtml2 } from './FuncionesCertificados';
import { cerLogica1 } from './FuncionesCertificados';
import { cerLogica2 } from './FuncionesCertificados';
import { cerLogica3 } from './FuncionesCertificados';

export const SectionCertificados = () => {
	return (
		<div className='contenedor certificado' id='certificado'>
			<h2 className='certificado__titulo'>Certificados</h2>

			<p className='certificado__descripcion'>
				Aqui algunas certificaciones que he obtenido a lo largo de mi preparación en
				su mayoria de forma autodidacta.
			</p>

			<div className='certificado__grid'>
				<div className='certificado__contenido'>
					<img
						src={java}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button type='button' onClick={cerJava} className='certificado__boton'>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={js}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button type='button' onClick={cerJs} className='certificado__boton'>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={generation}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button
						type='button'
						onClick={cerGeneration}
						className='certificado__boton'
					>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={html1}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button type='button' onClick={cerHtml1} className='certificado__boton'>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={html2}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button type='button' onClick={cerHtml2} className='certificado__boton'>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={logica1}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button
						type='button'
						onClick={cerLogica1}
						className='certificado__boton'
					>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={logica2}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button
						type='button'
						onClick={cerLogica2}
						className='certificado__boton'
					>
						Ver
					</button>
				</div>
				<div className='certificado__contenido'>
					<img
						src={logica3}
						alt='Imagen de certificado'
						className='certificado__imagen'
					/>
					<button
						type='button'
						onClick={cerLogica3}
						className='certificado__boton'
					>
						Ver
					</button>
				</div>
			</div>
		</div>
	);
};
