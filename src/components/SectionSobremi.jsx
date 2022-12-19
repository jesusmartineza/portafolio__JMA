import imagenperfil from '../img/jesus.jpeg';

export const SectionSobremi = () => {
	return (
		<div className='sobremi' id='sobremi'>
			<h2 className='sobremi__titulo'>Sobre Mi</h2>

			<div className='contenedor contenedor__sobremi'>
				<div className='sobremi__textos'>
					<p>
						Soy una persona apasionada por la programación y en bachillerato
						comencé a explorar este mundo, lo que me ha permitido desarrollar mi
						creatividad y trabajar en equipo con habilidades interpersonales
						sólidas. Me gustaría desenvolverme como desarrollador y aportar
						grandes ideas a la industria, creyendo firmemente en la famosa frase
						de "si lo puedes imaginar, lo puedes programar". Soy responsable y
						solidario, y tengo confianza en mi capacidad para resolver problemas
						de manera efectiva.
					</p>
					<p>
						Una de mis fortalezas es ser autodidacta, y he desarrollado varias
						herramientas que he potenciado con proyectos que van desde lo
						sencillo hasta lo avanzado. También he adoptado una mentalidad de
						crecimiento, lo que me ha ayudado a creer que con la práctica, mis
						habilidades pueden mejorar constantemente.
					</p>
				</div>
				<div>
					<img
						className='sobremi__imagen'
						src={imagenperfil}
						alt='Imagen del desarrollador'
					/>
				</div>
			</div>
		</div>
	);
};
