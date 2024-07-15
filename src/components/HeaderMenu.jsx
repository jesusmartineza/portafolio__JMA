export const HeaderMenu = () => {
	return (
		<div className='contenedor__header navegacion'>
			<a href='#inicio' className='navegacion__link'>
				Inicio
			</a>
			<a href='#sobremi' className='navegacion__link'>
				Sobre mi
			</a>
			<a href='#skills' className='navegacion__link'>
				Habilidades
			</a>
			<a href='#portafolio' className='navegacion__link'>
				Portafolio
			</a>
			<a href='#certificado' className='navegacion__link'>
				Certificados
			</a>
			<a
				href='https://drive.google.com/file/d/1weSzLFP3bHZiYQ0LWl05xuQKIAi7gcPi/view?usp=sharing'
				download='CV_JesusMartinezAyala.pdf'
				className='navegacion__link navegacion__link--cv'
				target='_blank'
			>
				Descargar CV
			</a>
		</div>
	);
};
