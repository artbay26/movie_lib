import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from "react-router-dom";

const MovieDiscription = (props) =>{
    const navigate = useNavigate();
        const backPrevious = () => {
            navigate(`/movie_lib/newCatalog`);
        }
        const ShowReviews = (id) => {
            navigate(`/movie_lib/movies/${id}/reviews`)
        }
    return (
            <div className="movieCard__wrapp" key={props.movie.id}>
                <div className="movieCard__arrowPrevious" onClick={backPrevious}><FontAwesomeIcon icon={faArrowLeft}/></div>
                <div className="movieCard__discrip discrip">
                    <h1 className="discrip__title">{props.movie.title}</h1>
                    <div className="discrip__genre">{props.movie.genre_ids ? props.movie.genre_ids[0] : ''}</div>
                    <div className="discrip__seeRateVote">
                        <div className="discrip__release">Release date: {props.movie.release_date}</div>
                        <div className="discrip__rateVote">
                            <div className="discrip__rate"><span><FontAwesomeIcon icon={faStar}/> </span> {props.movie.vote_average}</div>
                            <div className="discrip__vouteCount">Vote count: {props.movie.vote_count}</div>
                        </div>
                        <div className="discrip__lang">Original language: {props.movie.original_language}</div>
                    </div>
                    <p className="discrip__overview"> <span>Overview:</span> {props.movie.overview}</p>
                    <div className="discrip__heartReview">
                        <div className="discrip__heart"><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="discrip__reviews" onClick={()=>{ShowReviews(props.movie.id)}}>Read all reviews</div>
                    </div>
                </div>
                <div className="movieCard__image image _ibg">
                    <img src={'https://image.tmdb.org/t/p/original' + props.movie.backdrop_path} alt=""/>   
                </div>
            </div>        
    )
}
export default MovieDiscription;  