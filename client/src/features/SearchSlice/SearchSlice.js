import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = import.meta.env.BASE_URL;

export const defaultSearch =createAsyncThunk(
    "Search/defaultSearch",
    async(data)=>{
        try {
            const res = await axios.post(
              `http://127.0.0.1:5000/search`,
              {
                Search: data,
              }
            );
            return res.data;
          } catch (error) {
            console.log(error);
            return error.response.data;
          }
    }
)

const initialState = {
    Search: "",
    Result: ""
}
const SearchSlice = createSlice({
    name:"Search",
    initialState: initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
      builder
      .addCase(defaultSearch.pending,(state,action)=>{
        console.log("loading..");
        state.value="loading..."
      })
      .addCase(defaultSearch.fulfilled,(state,action)=>{
        console.log("done");
        state.value=action.payload;
      })
    }
})

export default SearchSlice.reducer;

