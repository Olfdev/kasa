import Header from '../components/Header'
import HomeImg from '../components/Home_img'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home(){
	return (
		<>
			<Header/>
			<main>
				<HomeImg/>
				<Gallery/>
			</main>
			<Footer/>
		</>
	)
}