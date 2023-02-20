import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDaily = createAsyncThunk("weather/Daily", async (city) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  return res.data;
});

export const fethcWeather = createAsyncThunk("weather/Weather", async (city) => {
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
    day : [],
    status : "idle"
  },
  reducers: {
    getDaily:(state,action)=>{
      state.data = action.payload
    }
  },
  extraReducers: {
    [fetchDaily.fulfilled]:(state,action)=>{
      state.status = "succeeded";
      state.data = action.payload.city.name;
      const list = action.payload.list;
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
    },[fetchDaily.pending]:(state)=>{
      state.status = "loading"
    },[fetchDaily.rejected]:(state,action)=>{
      state.status = "failed"
      state.error = action.error.message
    },
    // [fethcWeather.fulfilled]:(state,action)=>{
      
    //   console.log(action.payload)
    // }
  }
});
export const { getDaily } = weatherSlice.actions;
export default weatherSlice.reducer