import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'Favorite',
    initialState: {
        moviesInFavorite: []
    },
    reducers: {
        addMovieToFavorite(state, action) {
            if(state.moviesInFavorite.some(m => m.id === action.payload.id)) {
                return {...state, moviesInFavorite: [...state.moviesInFavorite.filter((m) => m.id !== action.payload.id)] }
                 
            }

            return {...state, moviesInFavorite: [...state.moviesInFavorite, action.payload]}
        },
        removeMovieAtFavorite (state, action)  {
            console.log(action)
            return {...state, moviesInFavorite: [...state.moviesInFavorite.filter((m) => m.id !== action.payload)] }
        }
    }
})

export const {addMovieToFavorite, removeMovieAtFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;