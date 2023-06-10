import './catalog.scss';
import CatalogItem from "./catalogItem";
import {useSelector} from "react-redux";
import GetMovies from '../../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Catalog = () => {
    let movies = useSelector(state => state.catalogSt.movieList);
    GetMovies();
    return (
        <div className="main__catalog catalog">
            <div className="catalog__container">
                <div className="catalog__titleFilter">
                    <div className="catalog__homeTitle">
                        <NavLink to="/movie_lib" className="catalog__home"><FontAwesomeIcon icon={faHouse}/></NavLink>
                        <h1 className="catalog__title">New</h1>
                    </div>
                    <div className="catalog__filter">
                        <batton type="batton" className="Catalog__filterBtn">Filter</batton>
                        <div className="catalog__filterList filterList ">
                            <div className="filterList__item">Date</div>
                            <div className="filterList__item">Rating</div>
                        </div>
                    </div>
                </div>
                <div className="catalog__movieList"> 
                    {movies.map(movie => <CatalogItem movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}
    
export default Catalog;  