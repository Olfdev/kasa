import {useState} from 'react';
import PropTypes from 'prop-types';

Carousel.propTypes = {
    pics: PropTypes.array
};

export default function Carousel(pictures){
    const [index, setIndex] = useState(1); 
    const length = pictures.pics.length;

    const Previous = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 1 ? length : newIndex);
    };

    const Next = () => {
    const newIndex = index + 1;
    setIndex(newIndex > length ? 1 : newIndex);
    };

    return (
    <div className="carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(${(-index + 1) * 100}%)` }}>
            {pictures.pics.map((pic, index) => (
                <img className="carousel-pic" key={index} src={pic} alt="apartment carousel"/>
            ))}
        </div>
        {length !== 1 && <><i className="fa-solid fa-chevron-left arrow carousel-arrow carousel-arrow-left" onClick={Previous}></i>
        <i className="fa-solid fa-chevron-right arrow carousel-arrow carousel-arrow-right" onClick={Next}></i>
        
        <div className='carousel-counter'>
            <h4>{index} / {length}</h4>
        </div></>}
    </div>
    )
}