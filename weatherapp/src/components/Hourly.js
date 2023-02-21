import React, { useEffect } from "react";
import { fetchDaily } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { SiSpeedtest } from "react-icons/si"
import { GiWindsock } from "react-icons/gi"
import Loading from "./Loading";

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
        {status === "loading" ? (
          <Loading />
        ) : (
          <div className="card">
            {treeHours.map((element, index) => {
              return (
                <div className="fdiv" key={index}>
                  <h4 className="name">
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
                    <span className="innerSpan">
                      Temperature
                      <span className="flex">
                        {Math.floor(element.main.temp)}
                        <TbTemperatureCelsius className="iconM" />
                      </span>
                    </span>
                    <span className="innerSpan">
                      Humidity
                      <span className="flex">
                        {element.main.humidity}
                        <WiHumidity className="iconM" />
                      </span>
                    </span>
                  </div>
                  <div className="font-semibold  text-white ">
                    <span className="innerSpan">
                      Wind Degree
                      <span className="flex justify-around ml-16 ">
                        {element.wind.deg}
                        <GiWindsock className="iconM" />
                      </span>
                    </span>
                    <span className="innerSpan">
                      Wind Speed
                      <span className="flex">
                        {Math.round(element.wind.speed)}km/h
                        <SiSpeedtest className="iconM" />
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );

}

export default Hourly;
