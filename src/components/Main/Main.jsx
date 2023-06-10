import Home from "./Home/Home";
import Catalog from "./New/catalog";
import MovieCard from './MovieCard/movieCard';
import MovieDiscription from './MovieCard/movieDiscription';
import Reviews from "./Reviews/reviews";
import {Routes, Route} from "react-router-dom";
import Favorite from "./Favorite/Favorite";

const Main = () => {
    return (
        <main>
             <Routes>
                <Route path="movie_lib" element={<Home/>} />
                <Route path="movie_lib/newCatalog" element={<Catalog/>} />
                <Route path="movie_lib/favorite" element={<Favorite/>} />
                <Route path="movie_lib/movies/:movie_id" element={<MovieCard/>}>
                    <Route path="movieCard" element={<MovieDiscription/>}/> 
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>
             </Routes>
        </main>
    )
}

export default Main;