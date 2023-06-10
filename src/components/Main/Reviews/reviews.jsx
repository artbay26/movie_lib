import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import ReviewsItem from './reviewsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {addReview} from "../../../data/reducers/reviewsReducer";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

let commentId = 8;
let object = '';
let user = '';
let rating = '';
let text = '';


const Reviews = (props) => {
    let objectElement = React.createRef();
    let userElement = React.createRef();
    let textElement = React.createRef();
    let reviewsSet = useSelector(state => state.reviewsSt.reviews);
    let dispatch = useDispatch();
    const [ratingInitialValue, setRating] = useState(0);
    let addReviewOnClick = () => { 
        let nowDateTime = new Date().toISOString(); 
        let nowDate = nowDateTime.split('T')[0];
        dispatch(addReview({
            id: commentId++, 
            object: object, 
            user: user, 
            rating: rating, 
            date: nowDate, 
            text: text 
        }));

        objectElement.current.value = '';
        userElement.current.value = '';
        textElement.current.value = '';
        setRating(0);
    } 

    let onChangeObject = () => {
        object = objectElement.current.value;        
    }

    let onChangeUser = () => {
        user = userElement.current.value;        
    }

    let onChangeText = () => {
        text = textElement.current.value;        
    }

    const handleRating = (rate) => {
        setRating(rate);
        rating = rate;        
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
    const navigate = useNavigate();
    const backMovieCard = (id) => {
        navigate(`/movie_lib/movies/${id}/movieCard`);
    }

    let movies = useSelector(state => state.catalogSt.movieList);   
    let params = useParams();
    let movieArr = movies.filter(m => m.id === +params.movie_id)
    let movie = movieArr && movieArr.length > 0 ? movieArr[0] : {};    

    


    return(
        <div className="main__reviews reviews" key={movie.id}>
            <div className="reviews__container">
            <div className="reviews__arrowPrevious" onClick={backMovieCard}><FontAwesomeIcon icon={faArrowLeft}/></div>
                <div className="reviews__poster">{movie.title}</div>
                <h1 className="reviews__title">Customer Reviews</h1>
                <div className="reviews__averageRating"><span><FontAwesomeIcon icon={faStar}/></span>{props.movie.vote_average}</div>
                <div className="reviews__wrapper">
                    <form className="reviews__form form">
                        <div className="form__wrapper">
                            <div className="form__titleCall">Write Your Review</div>
                            <label for="objectReview" className="req"><span>*</span></label>
                            <input 
                                className="form__objectReview"
                                name="objectReview"
                                type="text" 
                                placeholder="Your title" 
                                ref={objectElement} 
                                onChange={onChangeObject}
                                required
                            />
                            <label for="userName" className="req"><span>*</span></label>
                            <input 
                                className="form__userName req" 
                                name="userName"
                                type="text" 
                                placeholder="Your name" 
                                ref={userElement} 
                                onChange={onChangeUser}
                                required
                            />
                            <div className="form__userRating">                                              
                                <Rating
                                    initialValue={ratingInitialValue}
                                    onClick={handleRating}
                                    onPointerEnter={onPointerEnter}
                                    onPointerLeave={onPointerLeave}
                                    onPointerMove={onPointerMove}
                                />
                            </div>
                            <label for="userText" className="req"><span>*</span></label>
                            <textarea 
                                className="form__userText req" 
                                name="userText"
                                required
                                placeholder="Write a review"
                                ref={textElement}
                                onChange={onChangeText}                           
                                >
                            </textarea>
                            <button
                                className="form__button button"
                                type="submit" 
                                onClick={addReviewOnClick}>
                                    Submit
                            </button> 
                        </div>
                    </form>
                    <div className="reviews__list">
                        {reviewsSet.map(review => <ReviewsItem review={review}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews