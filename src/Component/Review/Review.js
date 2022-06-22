import React from 'react';
import './Review.css'
import useReviews from '../../hooks/useReviews';

const Review = () => {

    const [review] = useReviews();


    return (
        <div>
            <h5> All Review:{review.length}</h5>
            <div className='row'>

                {
                    review.map(data => <>

                        <div className='review-container  col-md-4'>
                            <h4>
                                Name:{data.author}
                                </h4>
                                <p>
                                    {data.text}
                                </p>
                            <h6>Rating:{data.rating}</h6>
                        </div>

                    </>
                    )
                };
            </div>

        </div>
    );
};

export default Review;