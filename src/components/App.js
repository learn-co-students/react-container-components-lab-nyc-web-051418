import React, { Component, Fragment } from 'react';
import _ from 'lodash'

//components
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';


class App extends Component {
    state = {
        searchTerm: "",
    }

    constructor (props) {
        super(props)
        this.key = process.env.REACT_APP_API_KEY
        this.url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${this.key}`
        this.state = {
            searchTerm: "",
            latestReviews: [],
            searchedReviews: [],
        }
    }

    returnDisplay = (header, stateItem) => {
        return (
            <Fragment>
                <h4 className="ui horizontal divider header">
                    <i className="edit icon"></i>
                    {header}
                </h4>
                <ReviewList 
                    reviews={stateItem}
                />
            </Fragment>
        )
    }

    selectDisplay = () => {
        if (this.state.searchTerm === "") {
        return this.returnDisplay("Latests Movie Reviews", this.state.latestReviews)
        } 
        else {
        return this.returnDisplay("Search Reviews", this.state.searchedReviews)
        }
    }  

    componentDidMount() {
        fetch(this.url)
        .then(r=>r.json())
        .then(apiArray => this.setState({ latestReviews: apiArray.results }))
    }
    
    setNewState = (e) => {
        this.setState({ searchTerm: e.target.value })
        this.fetchSearch(e.target.value)
    }

    fetchSearch = (searchedTerm) => {
        let url = 
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${this.key}&query=${searchedTerm}`
        
        if (searchedTerm === ""){
            return this.setState({"searchedReviews": []}) 
        }

        _.debounce(
            () => 
            fetch(encodeURI(url))
             .then(r=>r.json())
             .then(r => this.setState({"searchedReviews": r.results}))
        , 300).call(this)
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
                    setNewState={this.setNewState}
                />
                {this.selectDisplay()}
            </div>
        );
    }
}

export default App;