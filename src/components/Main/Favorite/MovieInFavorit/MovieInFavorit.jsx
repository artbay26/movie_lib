
import {useDispatch} from "react-redux";
import {removeMovieAtFavorite} from "../../../../data/reducers/favoriteReducer";

const MovieInFavorite = (props) => {
    let dispatch = useDispatch();
    return (
        <div className="favorite__movie" key={props.movieInFavorite.id}>
            <div className="favorite__img">
                <img src={'https://image.tmdb.org/t/p/original' + props.movieInFavorite.backdrop_path}  alt=""/>
            </div>
            <div className="favorite__txt">
                <div className="favorite__title">{props.movieInFavorite.title}</div>
                <div className="favorite__release"><span>Release date:</span> {props.movieInFavorite.release_date}</div>
                <div className="favorite__langBtn">
                    <div className="favorite__lang"><span>Original language:</span>  {props.movieInFavorite.original_language}</div>
                    <button onClick={()=>dispatch(removeMovieAtFavorite(props.movieInFavorite.id))} className="favorite__batton">Delete</button>
                </div>
                <div className="favorite__overview">{props.movieInFavorite.overview}</div>
                
            </div>
          
        </div>
    )
}

export default MovieInFavorite;