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
                <div className="review">
                    <p>{props.message}</p>
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