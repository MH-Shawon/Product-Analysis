import React from 'react';
import useReviews from '../../hooks/useReviews';

const Review = () => {

    const [review, setReviews] = useReviews();
    
    return (
        <div>
            <h5> Do your BokBok here:{review.length}</h5>
        </div>
    );
};

export default Review;