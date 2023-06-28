import Header from '../components/Header'
import Apartment from '../components/Apartment'
import Footer from '../components/Footer'
import Error from './Error'
import AptData from '../logements.json';
import { useParams } from 'react-router-dom';

export default function Apt(){
	const {id} = useParams();
	const data = AptData.find(apt =>
		apt.id === id
	);
	if (data === undefined) {
		return <Error/>
	}

	return (
		<>
			<Header/>
			<main>
				<div className="apt" key={data.id}>
						<Apartment id={data.id} title={data.title} cover={data.cover} pictures={data.pictures} description={data.description} hostName={data.host.name} hostPicture={data.host.picture} rating={data.rating} location={data.location} equipments={data.equipments} tags={data.tags}/>
				</div>
			</main>
			<Footer/>
		</>
	);
}