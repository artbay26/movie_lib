import "./movieCard.scss";
import {useSelector} from "react-redux";
import MovieDiscription from "./movieDiscription";
import {useParams} from "react-router-dom";
import  Reviews from "../Reviews/reviews"


const MovieCard = () => {
    let movies = useSelector(state => state.catalogSt.movieList);   
    let params = useParams();
    let movieArr = movies.filter(m => m.id === +params.movie_id)
    let movie = movieArr && movieArr.length > 0 ? movieArr[0] : {};    

    return(
        <div className="main__movieCard movieCard">
            <div className="movieCard__container">
                <div className="movieCard__holder">
                   <MovieDiscription movie = {movie} />
                    <Reviews movie = {movie}/>
                </div>
            </div>
        </div>
    )
}
export default MovieCard; 