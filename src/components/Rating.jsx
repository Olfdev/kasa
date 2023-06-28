import PropTypes from 'prop-types';

SetStars.propTypes = {
    stars: PropTypes.string
};


export default function SetStars(rating){
    const maxStars = 5;
    const givenStars = parseInt(rating.stars);
    const missedStars = maxStars - givenStars;

    function renderStars(count, color){
        const stars = [];
        for (let i = 0; i < count; i++) {
          stars.push(<i key={i} className={`fa-solid fa-star apt-rating-${color}`} />);
        }
        return stars;
    }




    return(
        <div className='apt-rating-wrapper'>
            {renderStars(givenStars, 'pink')}
            {renderStars(missedStars, 'grey')}
        </div>
    )
}