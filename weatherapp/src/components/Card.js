import React, { useEffect } from "react";
import { fetchDaily } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment"

function Cards() {

  let city = "Ankara"

   const item = useSelector((state) => state.weather.data);
   const temp = useSelector((state)=>state.weather.temp)
   const cityWeather =  useSelector((state)=>state.weather.cityWeather)
   const wind = useSelector((state)=>state.weather.wind)
   const day = useSelector((state)=>state.weather.day)
   const fifeDays = useSelector((state)=>state.weather.fifeDays)
   const status = useSelector((state)=>state.weather.status)

   let dispatch = useDispatch();
    console.log(item)
   useEffect(() => {
    if (status === "idle"){dispatch(fetchDaily(city));} 
   }, [dispatch,status]);

  return (
    <>
      <div className="bg-blue-300 flex-row flex m-2 shadow-2xl	shadow-slate-400 ">
        {fifeDays.map((element, index) => {
          return (
            <div
              className="hover:scale-105 p-6 m-2 rounded-lg bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <h4 className="mb-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                {item}
                <p>{moment([day[index]], "DD").format("dddd")}</p>
              </h4>
              <div className="font-bold  text-white  p-2">
                <div className="flex justify-center">
                  <img
                    className=""
                    src={`${process.env.REACT_APP_ICON_URL}n/${cityWeather[index].icon}@2x.png`}
                  ></img>
                </div>
                {cityWeather[index].main}
              </div>
              <div>
                <p className="font-normal  text-white">
                  Temp : {temp[index].temp} Feels : {temp[index].feels_like}{" "}
                  Humi : {temp[index].humidity}
                </p>
              </div>
              <div>
                <p className="font-normal  text-white">
                  Wind Degree : {wind[index].deg} Wind Speed :{" "}
                  {wind[index].speed}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
