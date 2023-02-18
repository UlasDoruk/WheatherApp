import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("weather/getWeaterDate",async()=>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/weather?q=Ankara&appid=${process.env.REACT_APP_API_KEY}`)
    return res.data
})


export const weatherSlice = createSlice({
  name: "weather",
  initialState:{
    data : [],
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state,action)=>{
        console.log(action.payload)
    }
  }
});

export default weatherSlice.reducer