import React from 'react';
import UUID from 'uuid'
//components
import Review from './Review';


const MovieReviews = (props) => {

    function loaded() {
        if (props.array.length === 0) {
            return (
                <div className="review">
                    <p>{props.message}</p>
                </div> 
            )
        } 
        else {
            return buildList()
        }
    }

    function buildList() {
        return props.array.map( function(review) {
            return (  
                <Review review={review}/>
            )
        })
    }

    return (
        <div className="ui link cards centered">
            {loaded()}
        </div>
    );
};

export default MovieReviews;