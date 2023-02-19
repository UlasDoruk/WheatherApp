import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    fifeDays : [],
    day : []
  },
  reducers: {},
  extraReducers: {
    [fetchDaily.fulfilled]:(state,action)=>{
      state.data = action.payload.city.name
      const list = action.payload.list
      list.forEach(element => {
        if (element.dt_txt.split("").slice(11, 13).join("") === "15")
          state.fifeDays.push(element);
      });
      state.fifeDays.map((e)=>{
        state.day.push(e.dt_txt.split("").slice(8, 10).join(""));
        state.temp.push(e.main);
        state.cityWeather.push(e.weather[0]);
        state.wind.push(e.wind);
      })
    }
  }
});

export default weatherSlice.reducer