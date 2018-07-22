import React, { Component } from 'react';
import 'isomorphic-fetch';
//components
import MovieReviews from './MovieReviews';

class LatestMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
        this.key = 'f98593a095b44546bf4073744b540da0'
        this.url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${this.key}`
        
        this.state = {
           reviewsArray: [],
        }
    }

    setStateReviews = apiArray => {
        this.setState({
            reviewsArray: apiArray.results,
        })
    }

    componentDidMount() {
        fetch(this.url)
        .then(r=>r.json())
        .then(this.setStateReviews)
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latests Movie Reviews</h1>
                <MovieReviews 
                    array={this.state.reviewsArray}
                    message={"LOADING"}
                />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;