import {useDispatch, useSelector} from "react-redux";
import {setGenres} from "../../../data/reducers/headerReducer";

const GenresHeader = () => {
    let genres = useSelector(state => state.headerSt.genres);
    let dispatch = useDispatch();
    dispatch(setGenres);
    return (
        <ul className="genres__list">
            {
                genres.map(genre => 
                    <li className="genres__item" key={genre.id}>                     
                        {genre.title}
                    </li>
                )                   
            }
        </ul>
    )
}
export default GenresHeader