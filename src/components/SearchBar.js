import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="ui fluid icon input">
                <input 
                    value={props.value}
                    type="text"
                    onChange={props.setNewState}
                    placeholder="Enter a movie title..."
                />
                <i className="search icon"></i>
        </div>
    );
};

export default SearchBar;