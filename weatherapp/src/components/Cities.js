import { useDispatch } from "react-redux";
import { fetchDaily } from "../redux/weatherSlice";
import {IoIosArrowDropdownCircle} from "react-icons/io"

export default function Cities() {
  const cities = [
    "New York",
    "London",
    "Madrid",
    "Paris",
    "Berlin",
    "Istanbul",
    "Ankara",
    "Tokyo",
    "Sydney",
  ];

  let dispatch = useDispatch();

  const handleChoose = (item) => {
    dispatch(fetchDaily(item));
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-800 hover:bg-blue-600 ml-2 mt-2 p-2 mb-2 sm:ml-10 font-bold rounded text-center  items-center flex "
        type="button">
        City
        <IoIosArrowDropdownCircle className="ml-2"/>
      </button>
      <div id="dropdown"
        className="z-10 hidden mr-2 rounded-lg shadow w-auto bg-gray-700">
          {cities.map((item, index) => {
            return (
              <ul
              key={index}
                className=" text-gray-700 "
                aria-labelledby="dropdownDefaultButton">
                <li
                  className="focus:bg-blue-300 hover:bg-slate-900 hover:cursor-pointer font-bold p-2 sm:p-4 text-blue-50"
                  onClick={() => handleChoose(item)}>
                  {item}
                </li>
              </ul>
            );
          })}
      </div>
    </>
  );
}
