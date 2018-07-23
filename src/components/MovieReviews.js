// Code MovieReviews Here
import React from 'react'; 

const MovieReviews = ({reviews}) => {

    const renderAllMovies = () => {
        console.log("movieReviews' Review List:", reviews)
        return reviews.map( movie => <p className="review">{movie.display_title}</p>)
    }

    return(
        <div className="review-list">{renderAllMovies()}</div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews; 