import React, { Component } from 'react';
import 'isomorphic-fetch';
import _ from 'lodash'
//components
import MovieReviews from './MovieReviewsCards';

class SearchableMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
        this.key = 'c4c50c9ebc8f4db5a0c071c9de2c6d68'
        
        this.state = {
           reviews: [],
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
        return this.state.reviews === nextState.reviews
    }

    componentDidUpdate(prevProps, prevState) {
        let url = 
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${this.key}&query=${this.state.searchTerm}`
        
        _.debounce(
            () => 
            fetch(encodeURI(url))
             .then(r=>r.json())
             .then(r => this.setNewState("reviews",r.results))
        , 300).call(this)

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <input 
                    value={this.state.searchTerm}
                    type="text"
                    onChange={
                        e => this.setNewState("searchTerm", e.target.value)
                    }
                />
                
                <MovieReviews 
                    array={this.state.reviews}
                    message={"No search"}
                />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;