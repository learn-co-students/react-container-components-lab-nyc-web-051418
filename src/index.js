import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';

//components
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <img 
      className="ui centered image"
      src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg" 
      alt="logo"
    /> 
    <h1 className="ui center aligned header">Movie Reviews</h1>   
    <SearchableMovieReviewsContainer />
    <h4 className="ui horizontal divider header">
      <i className="edit icon"></i>
      Latests Movie Reviews
    </h4>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);