import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDaily = createAsyncThunk("weather/Daily", async (city) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  return res.data;
})

export const weatherSlice = createSlice({
  name: "weather",
  initialState:{
    data:[],
    fifeDays : [],
    treeHours : [],
    status : "idle"
  },
  reducers: {},
  extraReducers: {
    [fetchDaily.fulfilled]:(state,action)=>{
      state.status = "succeeded";
      console.log(action.payload)
      state.data = action.payload.city.name;
      const daily = []
      action.payload.list.forEach(element => {
        if (element.dt_txt.split("").slice(11, 13).join("") === "15")
          daily.push(element)
      });
      state.fifeDays = daily;
      state.treeHours= action.payload.list.slice(0,5)
    },[fetchDaily.pending]:(state)=>{
      state.status = "loading"
    },[fetchDaily.rejected]:(state,action)=>{
      state.status = "failed"
      state.error = action.error.message
    }
  }
});
export default weatherSlice.reducer