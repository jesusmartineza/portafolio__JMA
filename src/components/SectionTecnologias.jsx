import bootstrap from '../img/bootstrap.svg';
import css from '../img/css.svg';
import figma from '../img/figma.svg';
import git from '../img/git.svg';
import github from '../img/github.svg';
import html from '../img/html.svg';
import js from '../img/js.svg';
import react from '../img/react.svg';
import resposive from '../img/responsive.svg';
import scrum from '../img/scrum.svg';
import vsc from '../img/vsc.svg';

export const SectionTecnologias = () => {
	return (
		<div className='contenedor skills' id='skills'>
			<h2 className='skills__titulo'>Habilidades</h2>

			<p className='skills__descripcion'>
				"Actualmente cuento con un amplio conjunto de habilidades y herramientas de
				programación, gestión de proyectos, así como conocimientos en varias
				herramientas especializadas, lo que me permite crear cosas increíbles y
				lograr resultados sobresalientes."{' '}
			</p>
			<div className='skills__grid'>
				<div className='skills__herramientas'>
					<img src={html} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>HTML</p>
				</div>

				<div className='skills__herramientas'>
					<img src={css} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>CSS</p>
				</div>

				<div className='skills__herramientas'>
					<img src={js} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>JAVASCRIPT</p>
				</div>

				<div className='skills__herramientas'>
					<img src={bootstrap} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>BOOTSTRAP</p>
				</div>

				<div className='skills__herramientas'>
					<img src={react} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>REACT</p>
				</div>

				<div className='skills__herramientas'>
					<img src={resposive} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>DISEÑO RESPONSIVO</p>
				</div>

				<div className='skills__herramientas'>
					<img src={git} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>GIT</p>
				</div>

				<div className='skills__herramientas'>
					<img src={github} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>GTIHUB</p>
				</div>

				<div className='skills__herramientas'>
					<img src={vsc} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>VISUAL STUDIO CODE</p>
				</div>

				<div className='skills__herramientas'>
					<img src={figma} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>FIGMA</p>
				</div>

				<div className='skills__herramientas'>
					<img src={scrum} alt='imagen tecnologia' className='skills__svg' />
					<p className='skills__subtitulo'>SCRUM</p>
				</div>
			</div>
		</div>
	);
};
