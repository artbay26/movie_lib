

import {configureStore} from "@reduxjs/toolkit";
import reviewsReducer from "../reducers/reviewsReducer";
import catalogReducer from "../reducers/catalogReducer";
import headerReducer from "../reducers/headerReducer";
let store = configureStore({
    reducer: {
        headerSt: headerReducer,
        reviewsSt: reviewsReducer,
        catalogSt: catalogReducer,
    }
})

export default store;