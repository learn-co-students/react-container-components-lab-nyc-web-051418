import React, {Fragment} from 'react';

//components
import Review from './Review';


const MovieReviews = (props) => {

    function buildList() {
        return props.reviews.map( function(review) {
            return (
                <Fragment key={review.link.url}> 
                    <Review review={review}/>
                </Fragment> 

            )
        })
    }

    function loaded() {
        if (props.reviews === undefined) {
            return (
                <div className="msg">
                    <p>LOADING.</p>
                </div> 
            )
        } 
        else if (props.reviews.length === 0) {
            return (
                <div className="msg">
                    <p>Sorry, we could not find any results for your search.</p>
                </div> 
            )
        }
        else {
            return buildList()
        }
    }

    return (
        <div className="ui link cards centered">
            {loaded()}
        </div>
    );
};

export default MovieReviews;