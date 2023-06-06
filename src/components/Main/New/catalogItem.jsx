import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const CatalogItem = (props) => {
    
    const navigate = useNavigate();
    const ShowMovie = (id) => {
        navigate(`/movies/${id}`)
    }
    return (
        <div className="catalog__movie movie" onClick={()=>{ShowMovie(props.movie.id)}}>
           <div className="movie__img">
                <img  src={'https://image.tmdb.org/t/p/original' + props.movie.poster_path} alt=""/>
            </div>
            <div className="movie__text">
                <div className="movie__titleHeart">
                    <h2 className="movie__tittle">{props.movie.title}</h2>
                    <div className="movie__heart"><FontAwesomeIcon icon={faHeart}/></div>
                </div>
                <div className="movie__release">Release date: {props.movie.release_date}</div>
                <div className="movie__rateVote">
                    <div className="movie__rate"><span><FontAwesomeIcon icon={faStar}/></span> {props.movie.vote_average}</div>
                    <div className="movie__vouteCount">Vote count: {props.movie.vote_count}</div>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem;