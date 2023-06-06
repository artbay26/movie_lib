import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const ReviewsItem = (props) => {
    return ( 
            <div className="reviews__item" key={props.review.id}>
                <div className="reviews__userObjectReview">{props.review.object}</div>
                <div className="reviews__userName">{props.review.user}</div>
                <div className="reviews__userRating"><span><FontAwesomeIcon icon={faStar}/></span> {props.review.rating}</div>
                <div className="reviews__userText">{props.review.text}</div>
                <div className="reviews__userDate">{props.review.date}</div>
            </div>
    )
}
export default ReviewsItem