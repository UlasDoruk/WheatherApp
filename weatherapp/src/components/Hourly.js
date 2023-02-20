import React, { useEffect } from "react";
import { fetchDaily } from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

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
        <div className="bg-blue-300 flex-row flex m-4 shadow-2xl	shadow-slate-400 ">
          {treeHours.map((element, index) => {
            return (
              <div
                className="hover:scale-105 p-6 m-2 rounded-lg bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <h4 className="mb-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  {item}
                  <p>
                    {moment(
                      [element.dt_txt.split("").slice(10, 16).join("")],
                      "h:mm"
                    ).format("h:mm a")}
                  </p>
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
                <div>
                  <p className="font-bold  text-white">
                    Temp : {element.main.temp} Feels :{element.main.feels_like}
                    Humi : {element.main.humidity}
                  </p>
                </div>
                <div>
                  <p className="font-bold  text-white">
                    Wind Degree : {element.wind.deg}
                    Wind Speed :{element.wind.speed}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );

}

export default Hourly;
