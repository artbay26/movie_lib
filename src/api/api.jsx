import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setMovies} from "../data/reducers/catalogReducer";

 const GetMovies = () => {
    let dispatch = useDispatch();
    useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjE5YmY0NzUwNjYyYjNmMmEzYWQ1MjliODJhMTNmMyIsInN1YiI6IjY0NzBlZmZiOWFlNjEzMDEwNDU5YzZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FVcHNAWSebxf_1uDKBsrmp3cwq-Mv-jmNfEKCnX32r8'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch(setMovies(response.data.results));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [dispatch])
}

export default GetMovies; 
