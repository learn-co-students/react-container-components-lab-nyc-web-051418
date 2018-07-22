import React from 'react';
import UUID from 'uuid'
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
                <div key={UUID()} className="review">
                    <a href={review.link.url} target="_blank"> 
                        <h2>{review.display_title}</h2>
                    </a>
                    <h3>{review.critics_pick === 1 ? "Critics pick" : null}</h3>
                    <p>by {review.byline}</p>
                    <p>{review.headline}</p>
                    <p>Summary: {review.summary_short}</p>
                </div> 
            )
        })
    }

    return (
        <div className="review-list">
            {loaded()}
        </div>
    );
};

export default MovieReviews;