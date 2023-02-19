import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("weather/getWeater",async(city)=>{
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    return res.data
})

export const fetchDaily = createAsyncThunk("weather/Daily", async (city) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  return res.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState:{
    data:[],
    temp:[],
    wind : [],
    cityWeather : [],
    fifeDays : []
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state,action)=>{
        // state.data = action.payload
        // state.temp = action.payload.main
        // state.cityWeather = action.payload.weather[0];
        // state.wind = action.payload.wind
    },
    [fetchDaily.fulfilled]:(state,action)=>{
      state.data = action.payload.city.name
      const list = action.payload.list
      list.forEach(element => {
        if (element.dt_txt.split("").slice(11, 13).join("") === "15")
          state.fifeDays.push(element);
          state.temp.push(element.main)
          state.cityWeather.push(element.weather[0])
          state.wind.push(element.wind)
      });
    }
  }
});

export default weatherSlice.reducer