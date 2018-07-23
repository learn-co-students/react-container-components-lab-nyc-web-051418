// Code SearchableMovieReviewsContainer Here
import React, {Component }from 'react';
const NYT_API_KEY = 'f7aa7845a7624f2babd861b64aa6a116';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    renderSearchedReviews() {
        console.log("We're in rendering searched reviews!")
        console.log("Current reviews state:", this.state.reviews)
        return this.state.reviews.map( review => 
            <p className="review">{review.display_title}</p>
        )
    }

    performSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
        let thisURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f7aa7845a7624f2babd861b64aa6a116&query=" + event.target.value
        fetch(thisURL).then( resp => resp.json()).then( json => this.setState({reviews: json.results}))
    }
    render() {
        return(
            <div className="searchable-movie-reviews">
              <label>Enter a search term: </label>
              <input type="text" onChange={this.performSearch}/>
              {this.state.reviews.length > 0 ? this.renderSearchedReviews() : "Search for a film!"}
            </div>
            
        )
    }
}

export default SearchableMovieReviewsContainer; 