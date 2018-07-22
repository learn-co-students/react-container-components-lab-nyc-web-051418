// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

 export default class SearchableMovieReviewsContainer extends Component {
   state={
     searchTerm: "",
     reviews: [],
   }
handleUserInput=(event)=>{
  this.setState({
    searchTerm: event.target.value,
  })
}

handleSubmit=(event)=>{
  event.preventDefault()
  // debugger;
  fetch(BASE_URL+`${this.state.searchTerm}`).then(r=>r.json()).then(data=>
  this.setState({
    reviews: data.results,
  }))
}


 render() {

return (<div className="searchable-movie-reviews">
<h1>Let&apos;s Search</h1>
  <form onSubmit={this.handleSubmit}>
  <input type="text" value={this.state.searchTerm} onChange={this.handleUserInput} />
  <input type="submit" value="Search" />
  </form>
  <MovieReviews reviews={this.state.reviews} />
</div> )
 }
 }
