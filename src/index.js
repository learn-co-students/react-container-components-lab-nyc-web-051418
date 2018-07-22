import React from 'react';
import ReactDOM from 'react-dom';
//components
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h1>NEW YORK TIMES REVIEWS</h1>
    <SearchableMovieReviewsContainer />
    <hr/><hr/><hr/>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);