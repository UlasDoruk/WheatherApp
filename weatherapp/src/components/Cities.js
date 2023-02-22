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
        className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
          {cities.map((item, index) => {
            return (
              <li
                key={index}
                className="focus:bg-blue-300 hover:bg-slate-900 hover:cursor-pointer   font-bold  p-1 sm:p-4 text-blue-50"
                onClick={() => handleChoose(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
