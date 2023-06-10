

import {configureStore} from "@reduxjs/toolkit";
import reviewsReducer from "../reducers/reviewsReducer";
import catalogReducer from "../reducers/catalogReducer";
import headerReducer from "../reducers/headerReducer";
import favoriteReducer from "../reducers/favoriteReducer";
let store = configureStore({
    reducer: {
        headerSt: headerReducer,
        reviewsSt: reviewsReducer,
        catalogSt: catalogReducer,
        favorite: favoriteReducer,
    }
})

export default store;