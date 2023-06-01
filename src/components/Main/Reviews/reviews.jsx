import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import ReviewsItem from './reviewsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
let commentId = 8;
let object = '';
let user = '';
let rating = '';
let text = '';
let objectElement = React.createRef();
let userElement = React.createRef();
let textElement = React.createRef();

const Reviews = (props) => {
    let ReviewsList = props.reviewsPage.reviews.map(review =>
        <ReviewsItem 
            id={review.id} 
            object={review.object} 
            user={review.user} 
            rating={review.rating} 
            date={review.date} 
            text={review.text}
        />)

    const [ratingInitialValue, setRating] = useState(0);

    let addReview = () => { 
        let nowDateTime = new Date().toISOString(); 
        let nowDate = nowDateTime.split('T')[0];
            props.dispatch({
                type: 'REVIEW_ADDED',
                review: {
                    id: commentId++, 
                    object: object, 
                    user: user, 
                    rating: rating, 
                    date: nowDate, 
                    text: text
                } 
            });
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
    const handleRating = (rate: number) => {
        setRating(rate);
        rating = rate;        
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)
    return(
        <div className="main__reviews reviews">
            <div className="reviews__container">
                <h1 className="reviews__title">Customer Reviews</h1>
                <div className="reviews__averageRating"><span><FontAwesomeIcon icon={faStar}/></span> 4.5</div>
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
                            <input 
                                className="form__button button"
                                type="button" 
                                value="submit"                                
                                onClick={addReview}
                            />
                        </div>
                    </form>
                    <div className="reviews__list">
                        {ReviewsList}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews