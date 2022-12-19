import { Footer } from './components/Footer';
import { HeaderMenu } from './components/HeaderMenu';
import { MainPortafolio } from './components/MainPortafolio';
import { SectionCertificados } from './components/SectionCertificados';
import { SectionSaludo } from './components/SectionSaludo';
import { SectionSobremi } from './components/SectionSobremi';
import { SectionTecnologias } from './components/SectionTecnologias';

function App() {
	return (
		<div>
			<HeaderMenu />
			<SectionSaludo />
			<SectionSobremi />
			<SectionTecnologias />
			<MainPortafolio />
			<SectionCertificados />
			<Footer />
		</div>
	);
}

export default App;
