import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addMovieToFavorite} from "../../../data/reducers/favoriteReducer";
import { useState } from "react";





const CatalogItem = (props) => {
    
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ShowMovie = (id) => {
        navigate(`/movie_lib/movies/${id}/movieCard`)
    }

    const [isFull, setFull] = useState(false);
    /*if (moviesInFavorite && movieInFavorite.filter(m => m.id == props.movie.id).length > 0){
        setFull(true);
    }*/
    const AddBlueHeart = () => {
        
        setFull(!isFull)
    }

    return (
        <div className="catalog__movie movie"   key={props.movie.id}>
           <div className="movie__img" onClick={()=>{ShowMovie(props.movie.id)}}>
                <img  src={'https://image.tmdb.org/t/p/original' + props.movie.poster_path} alt=""/>
            </div>
            <div className="movie__text">
                <div className="movie__titleHeart">
                    <h2 className="movie__tittle">{props.movie.title}</h2>
                    <div className={"movie__heart " + (isFull ? "heartBlue" : "heartWhite")}
                        onClick={() => dispatch(addMovieToFavorite(props.movie))}
                     >
                        <FontAwesomeIcon icon={faHeart} className="movie__iconFaHeart" onClick={AddBlueHeart}/>
                    </div>
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