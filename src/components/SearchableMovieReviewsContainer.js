import React, { Component } from 'react';
import 'isomorphic-fetch';
//components
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
        this.key = 'f98593a095b44546bf4073744b540da0'
        
        this.state = {
           reviewsArray: [],
           searchTerm: "",
        }

    }

    setNewState = (key, newValue) => {
        newValue === "" ? console.log("empty", newValue) : console.log("not empty", newValue)

        this.setState({
            [key]: newValue,
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.reviewsArray === nextState.reviewsArray
    }

    componentDidUpdate(prevProps, prevState) {
        let url = 
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${this.key}&query=${this.state.searchTerm}`
        
        fetch(url)
        .then(r=>r.json())
        .then(r => this.setNewState("reviewsArray",r.results))

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h1>Search</h1>
                <input 
                    value={this.state.searchTerm}
                    type="text"
                    onChange={e => this.setNewState("searchTerm", e.target.value)}
                />
                <MovieReviews 
                    array={this.state.reviewsArray}
                    message={"No search"}
                />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;