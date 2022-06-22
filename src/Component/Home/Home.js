import React from 'react';
import Review from '../Review/Review';
import './Home.css'
import Images from './images/DSC.jpeg'
import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';

const Home = () => {
    const [review, setReviews] = useReviews();
    return (
        <div className='homeWrapper'>
            <div className='home'>
                <div className='description'>
                    <h1>
                        You Select <br />
                        <span className='span'>We Collect!!!!</span>
                    </h1>
                    <p>
                        Everyone wanted something that would push their performance to the next-level, and it was out job to rise to the challenge. Now as a family of master bat makers along with a skilled team of local artisans, we create arguably the best cricket equipment on the planet, which you know as DSC.
                    </p>
                </div>

                <div className='img'>
                    <img src={Images} alt="" />
                </div>


            </div>
            <div className='review'>
                <h2> Customer Review({review.length})</h2>
                <div className='row'>
                    {
                        review.slice(0, 3).map(data =>

                            <>

                                <div className='reviewContainer col-md-4'>
                                    <h5>
                                        Name:{data.author}
                                    </h5>
                                    <p>{data.text}</p>
                                    <h6>
                                        Rating:{data.rating}
                                    </h6>
                                </div>

                            </>

                        )
                    };
                </div>
                <Link to='/review'>
                    <button className='btn btn-info'>See All Review</button>
                </Link>
            </div>
        </div>

    );
};

export default Home;