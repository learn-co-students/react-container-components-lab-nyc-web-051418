import React, { Component, Fragment } from 'react';
//components
import SearchBar from './SearchBar';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

class App extends Component {
    state = {
        searchTerm: ""
    }


    displaySearch = () => {
        return (
            <Fragment>
                <h1 className="ui center aligned header">Movie Reviews</h1>   
                <SearchableMovieReviewsContainer searchTerm={this.state.searchTerm}/>
            </Fragment>
        )
    }

    displayLatest = () => {
        return (
            <Fragment>
                <h4 className="ui horizontal divider header">
                    <i className="edit icon"></i>
                    Latests Movie Reviews
                </h4>
                <LatestMovieReviewsContainer />
            </Fragment>
        )
    }

    setNewState = (key, newValue) => {
        this.setState({
            [key]: newValue,
        })
    }

    render() {
        return (
            <div className="app">
                <img 
                    className="ui centered image"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg" 
                    alt="logo"
                />
                <SearchBar 
                    value={this.state.searchTerm}
                    onChange={
                        e => this.setNewState("searchTerm", e.target.value)
                    }
                />
                { this.state.searchTerm === "" ? 
                    this.displayLatest()
                :
                    this.displaySearch()
                }
            </div>
        );
    }
}

export default App;