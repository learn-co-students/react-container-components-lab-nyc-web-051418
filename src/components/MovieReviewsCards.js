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
                <div key={UUID()} className="card">
                    <div className="image">
                        {imgPresent(review)}
                    </div>
                    <div className="content">
                    <div className="header">{review.display_title}</div>
                    <div className="meta">
                        <a href={review.link.url} target="_blank">NYT Page</a>
                    </div>
                    <div className="description">
                        by {review.byline},
                        date: {review.publication_date}
                        Summary: {validator(review.summary_short)}
                    </div>
                    </div>
                    <div className="extra content">
                    <span className="right floated">
                        MPAA Rating: {validator(review.mpaa_rating)}
                    </span>
                    <span>
                        <i className="user icon"></i>
                        {review.critics_pick === 1 ? "Critics pick" : null}
                    </span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="ui link cards">
            {loaded()}
        </div>
    );
};

export default MovieReviews;