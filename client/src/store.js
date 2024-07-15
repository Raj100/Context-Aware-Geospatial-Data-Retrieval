import { configureStore } from "@reduxjs/toolkit";
import Search from "./features/SearchSlice/SearchSlice"


export default configureStore({
    reducer:{
        Search:Search,
    }
})