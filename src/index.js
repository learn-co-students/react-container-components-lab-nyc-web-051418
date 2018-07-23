import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';

//components
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h1>NEW YORK TIMES REVIEWS</h1>
    <h4 class="ui horizontal divider header">
      <i class="search icon"></i>
      Search
    </h4>
    <SearchableMovieReviewsContainer />
    <h4 class="ui horizontal divider header">
      <i class="edit icon"></i>
      Latests Movie Reviews
    </h4>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);