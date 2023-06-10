import {useSelector} from "react-redux";
import MovieInFavorite from "./MovieInFavorit/MovieInFavorit";
import "./Favorite.scss";

const Favorite = () => {
    let moviesInFavorite = useSelector(state => state.favorite.moviesInFavorite)
    return (
        <div className="main__favorite favorite">
            <div className="favorite__container">
                <h1 className="favorite__titlePage">My Favorite: {moviesInFavorite.length}</h1>
                {moviesInFavorite.map(movieInFavorite => <MovieInFavorite movieInFavorite = {movieInFavorite}/>)}
            </div> 
        </div>
    )
}
export default Favorite;

