// Code SearchableMovieReviewsContainer Here
import React, {Component }from 'react';

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    performSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render() {
        return(
            <div className="searchable-movie-reviews">
              <label>Enter a search term: </label>
              <input type="text" onChange={this.performSearch}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer; 