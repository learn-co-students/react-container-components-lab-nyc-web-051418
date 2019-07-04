import React, {Fragment} from 'react';

const Review = (props) => {

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

    return (
        <div key={props.review.link.url} className="card">
            <div className="image">
                {imgPresent(props.review)}
            </div>
            <div className="content">
                <div className="header">{props.review.display_title}
                </div>
                    <div className="meta">
                        <a href={props.review.link.url} target="_blank">NYT Page</a>
                    </div>
                    <div className="description">
                        by {props.review.byline}
                        {props.review.publication_date}. 
                        Summary: {validator(props.review.summary_short)}
                    </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    MPAA Rating: {validator(props.review.mpaa_rating)}
                    </span>
                <span>
                    {props.review.critics_pick === 1 ? 
                        <Fragment>
                            <i className="yellow star icon"></i> 
                            "Critics pick" 
                        </Fragment>
                    : 
                        null}
                </span>
            </div>
        </div>

    );
};

export default Review;