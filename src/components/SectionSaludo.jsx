import React, { useState, useEffect } from 'react';

export const SectionSaludo = () => {
	const [text, setText] = useState('');
	const [wordIndex, setWordIndex] = useState(0);
	const words = ['Desarrollador', 'FrontEnd', 'Junior'];

	useEffect(() => {
		const interval = setInterval(() => {
			setText(words[wordIndex]);
			setWordIndex((wordIndex + 1) % words.length);
		}, 2000);
		return () => clearInterval(interval);
	}, [wordIndex]);

	return (
		<div className='imagen__hero scroll__saludo' id='inicio'>
			<div className='typing-animation'>
				<h1>
					Hola bienvenidos, <br />
					te saluda Jesús Martínez <br /> y soy {''}
					<span className='typing-animation__text'>{text}</span>
				</h1>
			</div>
		</div>
	);
};
