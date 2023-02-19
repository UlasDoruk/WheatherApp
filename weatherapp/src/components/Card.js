import React, { useEffect } from "react";
import { fetchDaily, fetchData } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

function Cards() {

  let city = "Ankara"

   const item = useSelector((state) => state.weather.data);
   const temp = useSelector((state)=>state.weather.temp)
   const cityWeather =  useSelector((state)=>state.weather.cityWeather)
   const wind = useSelector((state)=>state.weather.wind)
   const fifeDays = useSelector((state)=>state.weather.fifeDays)

  // console.log(fifeDays)
  console.log(temp)

   let dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchData(city));
     dispatch(fetchDaily(city))
   }, [dispatch]);

  return (
    <>
      {fifeDays.map((element, index) => {
        return (
          <div className="block max-w-sm p-6 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item}
            </h5>
            <p className="font-normal  text-white">
              {temp.temp} Feels : {temp.feels_like} Humi : {temp.humidity}
            </p>
            <p className="font-normal  text-white">
              {cityWeather.main} Descrip : {cityWeather.description}
            </p>
            <p className="font-normal  text-white">
              Wind Degree : {wind.deg} Wind Speed : {wind.speed}
            </p>
          </div>
        );
      })}
     
    </>
  );
}

export default Cards;
