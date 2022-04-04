import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-reducer";

export default configureStore({
    reducer: {
        search: searchReducer
    }
});
