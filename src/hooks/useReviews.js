import { useEffect } from "react";
import { useState } from "react"

const useReviews =()=>{

    const [review, setReviews] = useState([]);

    useEffect( () =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));

    },[])

    return[review, setReviews];
};

export default useReviews;