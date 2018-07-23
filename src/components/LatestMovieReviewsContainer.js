import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'; 

const NYT_API_KEY = 'f7aa7845a7624f2babd861b64aa6a116';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        console.log(this)   
        fetch(URL).then( resp => resp.json()).then( json => this.setState({
            reviews: json.results
        },))
    }

    componentDidUpdate() {
        console.log(this.state.reviews);
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer; 