import {createSlice} from "@reduxjs/toolkit";

const CatalogSlice = createSlice({
    name: "catalog",
    initialState: {
        movieList: []
    },
    reducers:{
        setMovies(state, action){
            return {...state, movieList:[...action.payload]}
        }
    }
})
export const {setMovies} = CatalogSlice.actions;
export default CatalogSlice.reducer;
    