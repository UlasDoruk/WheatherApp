import React, { useEffect } from "react";
import { fetchDaily } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { SiSpeedtest } from "react-icons/si"
import { GiWindsock } from "react-icons/gi"

function Hourly() {

    const city = "Ankara";

    const item = useSelector((state) => state.weather.data);
    const treeHours = useSelector((state) => state.weather.treeHours);
    const status = useSelector((state) => state.weather.status);

    let dispatch = useDispatch();

    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchDaily(city));
      }
    }, [dispatch, status]);

    return (
      <>
        <div className="bg-blue-300 flex-row flex m-2 mt-5 p-2 rounded  justify-around">
          {treeHours.map((element, index) => {
            return (
              <div
                className="hover:scale-105 p-6 m-2 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <h4 className="mb-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  {item}
                  <div className="flex justify-center p-2">
                    {moment(
                      [element.dt_txt.split("").slice(10, 16).join("")],
                      "HH:mm"
                    ).format("HH:mm")}
                  </div>
                </h4>
                <div className="font-bold  text-white  p-2">
                  <div className="flex justify-center">
                    <img
                      className=""
                      src={`${process.env.REACT_APP_ICON_URL}n/${element.weather[0].icon}@2x.png`}
                    ></img>
                  </div>
                  <div>{element.weather[0].main}</div>
                </div>
                <div className="font-semibold  text-white ">
                  <span className="bg-slate-700 rounded p-2 m-2 flex justify-between">
                    Temperature
                    <span className="flex">
                      {Math.floor(element.main.temp)}
                      <TbTemperatureCelsius className="mt-1 ml-2" />
                    </span>
                  </span>
                  <span className="bg-slate-700 rounded p-2 m-2 flex justify-between">
                    Humidity
                    <span className="flex">
                      {element.main.humidity}
                      <WiHumidity className="mt-1 ml-2" />
                    </span>
                  </span>
                </div>
                <div className="font-semibold  text-white ">
                  <span className="bg-slate-700 rounded p-2 m-2 flex justify-between">
                    Wind Degree
                    <span className="flex justify-around ml-16 ">
                      {element.wind.deg}
                      <GiWindsock className="mt-1 ml-2" />
                    </span>
                  </span>
                  <span className="bg-slate-700 rounded p-2 m-2 flex justify-between">
                    Wind Speed
                    <span className="flex">
                      {element.wind.speed}
                      <SiSpeedtest className="mt-1 ml-2" />
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );

}

export default Hourly;
