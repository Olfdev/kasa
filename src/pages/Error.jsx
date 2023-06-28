import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

export default function Error(){
	return (
		<>
			<Header/>
			<main>
				<h1 className="error">404</h1>
				<h3 className="error-oops">Oups ! La page que vous demandez n&apos;existe pas.</h3>
				<p className="error-home"><Link to='/'>Retourner à la page d&apos;accueil</Link></p>
			</main>
			<Footer/>
		</>
	)
}