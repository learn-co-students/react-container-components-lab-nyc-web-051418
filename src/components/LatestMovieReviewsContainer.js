import React, { Component } from 'react';
import 'isomorphic-fetch';
//components
import MovieReviews from './ReviewList';

class LatestMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
        this.key = process.env.REACT_APP_API_KEY
        this.url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${this.key}`
        
        this.state = {
           reviews: [],
        }
    }

    setStateReviews = apiArray => {
        this.setState({
            reviews: apiArray.results,
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
                <MovieReviews 
                    array={this.state.reviews}
                    message={"LOADING"}
                />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;