import Home from "./Main";
import Reviews from "./Reviews/reviews";
import Catalog from "./New/catalog";
import MovieCard from './MovieCard/movieCard';
import {Routes, Route} from "react-router-dom";

const Main = () => {
    return (
        <main>
             
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/newCatalog" element={<Catalog/>} />
                <Route path="/movies/:movie_id" element={<MovieCard/>}/>
                
                <Route path="/reviewForm" element={<Reviews/>}/>
             </Routes>
        </main>
    )
}

export default Main;