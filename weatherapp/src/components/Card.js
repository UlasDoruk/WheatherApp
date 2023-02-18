import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

function Cards() {

  const city = "Ankara"

   const item = useSelector((state) => state.weather.data);
   const temp = useSelector((state)=>state.weather.temp)
   const cityWeather =  useSelector((state)=>state.weather.cityWeather)
   const wind = useSelector((state)=>state.weather.wind)

   let dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchData(city));
   }, [dispatch]);

  return (
    <>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {temp.temp} Feels : {temp.feels_like} Humi : {temp.humidity}
        </p> 
        <p>{cityWeather.main} Descrip : {cityWeather.description}</p>
        <p>Wind Degree : {wind.deg} Wind Speed : {wind.speed}</p>
      </div>
    </>
  );
}

export default Cards;
