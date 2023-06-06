import {createSlice} from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: 'genresSet',
    initialState: {
        genres: [
            {id: 1, title: 'Action'},
            {id: 2, title: 'Comedy'},
            {id: 3, title: 'Drama'},
            {id: 4, title: 'Fantasy'},
            {id: 5, title: 'Horror'},
            {id: 6, title: 'Mystery'},
            {id: 7, title: 'Romance'},
            {id: 8, title: 'Thriller'},
            {id: 9, title: 'Western'},
            {id: 10, title: 'Criminal'}            
        ]
    },
    reducers: {
        setGenres (state, action) {
            return {...state, genres:[...action.payload]}
        }
    }
})

export const {setGenres} = genresSlice.actions;
export default genresSlice.reducer;
