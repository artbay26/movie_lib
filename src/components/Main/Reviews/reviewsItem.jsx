import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const ReviewsItem = (props) => {
    return ( 
            <div className="reviews__item" key={props.id}>
                <div className="reviews__userObjectReview">{props.object}</div>
                <div className="reviews__userName">{props.user}</div>
                <div className="reviews__userRating"><span><FontAwesomeIcon icon={faStar}/></span> {props.rating}</div>
                <div className="reviews__userText">{props.text}</div>
                <div className="reviews__userDate">{props.date}</div>
            </div>
    )
}
    
export default ReviewsItem