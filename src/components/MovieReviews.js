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

    function imgPresent(review) {
        return review.multimedia ? 
            <img 
                src={review.multimedia.src}
                alt={review.display_title}
            />
        :
            null
    }

    function validator(content) {
        return content ? content : "NA"
    }

    function buildList() {
        return props.array.map( function(review) {
            return (
                <div key={UUID()} className="review">
                    <a href={review.link.url} target="_blank"> 
                        <h2>{review.headline}</h2>
                    </a>
                    <h3>{review.critics_pick === 1 ? "Critics pick" : null}</h3>
                    <p>by {review.byline}, date: {review.publication_date}</p>
                    {imgPresent(review)}
                    <p>Movie: {review.display_title}</p>
                    <p>Summary: {validator(review.summary_short)}</p>
                    <p>MPAA Rating: {validator(review.mpaa_rating)}</p>
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