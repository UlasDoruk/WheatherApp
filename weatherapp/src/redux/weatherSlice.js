import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("weather/getWeater",async(city)=>{
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    return res.data
})

export const weatherSlice = createSlice({
  name: "weather",
  initialState:{
    data:[],
    temp:[],
    wind : [],
    cityWeather : []
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state,action)=>{
        state.data = action.payload
        state.temp = action.payload.main
        state.cityWeather = action.payload.weather[0];
        state.wind = action.payload.wind
    }
  }
});

export default weatherSlice.reducer