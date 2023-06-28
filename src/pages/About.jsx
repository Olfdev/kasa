import Header from '../components/Header'
import HomeImg from '../components/Home_img'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import AboutData from '../about.json';

export default function About(){
	return (
		<>
			<Header/> 
			<main>
				<HomeImg/>
				{AboutData.map(data => {
					return (
						<div className="collapse-wrapper" key={data.id}>
							<Collapse title={data.title} content={data.content}/>
						</div>
					)}
				)}
			</main>
			<Footer/>
		</>
	)
}