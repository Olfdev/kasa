import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import PropTypes from 'prop-types';

Apt.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    pictures: PropTypes.array,
    description: PropTypes.string,
    hostName: PropTypes.string,
    hostPicture: PropTypes.string,
    rating: PropTypes.string,
    location: PropTypes.string,
    equipments: PropTypes.array,
    tags: PropTypes.array
  };

export default function Apt({title, pictures, description, hostName, hostPicture, rating, location, equipments, tags}) {
    //let test

return (
    <>
        <Carousel pics={pictures}/>
        <div className="apt-wrapper">
            <div className="apt-flex apt-left">
                <h1 className="apt-left-title">{title}</h1>
                <h3 className="apt-location">{location}</h3>
                <div className="apt-tags">{tags.map((tag, index) => (
                <p key={index}>{tag}</p>
                ))}</div>
            </div>
            <div className="apt-flex apt-right">
            <div className="apt-profile">
                <h3 className="apt-profile-name">{hostName}</h3>
                {hostPicture ? <img src={hostPicture} alt="profile picture" className="apt-profile-pic"/> : <i className="apt-profile-pic fa-solid fa-user"/>}
            </div>
            <Rating stars={rating}/>
        </div>
        </div>
        <div className="apt-flex apt-collapse">
        <Collapse title="Description" content={description}/>
        <Collapse title="Équipements" content={equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
        ))}/>
        </div>
    </>
)}