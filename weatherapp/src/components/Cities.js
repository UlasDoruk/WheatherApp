import React from "react";
import { useDispatch } from "react-redux";

// Redux
import { fetchDaily } from "../redux/weatherSlice";

// Material IU
import Popover from "@mui/material/Popover";

// Icon
import {MdOutlineFormatAlignJustify} from "react-icons/md"


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

  // Material UI Popover
  // ---------------------
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // ---------------------

  let dispatch = useDispatch();

  const handleChoose = (item) => {
    dispatch(fetchDaily(item));
  };

  return (
    <>
      {/* <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-800 hover:bg-blue-600 ml-2 mt-2 p-2 mb-2 sm:ml-10 font-bold rounded text-center  items-center flex "
        type="button"
      >
        City
        <IoIosArrowDropdownCircle className="ml-2" />
      </button> */}
      <button
        className=" pr-2 m-1 pl-2 mr-1 "
        aria-describedby={id}
        onClick={handleClick}
      ><MdOutlineFormatAlignJustify className="w-5 h-5" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
          {cities.map((item, index) => {
            return (
              <ul
                key={index}
                className="bg-slate-900"
                aria-labelledby="dropdownDefaultButton"
              >
                <li
                  className="hover:bg-slate-700 hover:cursor-pointer font-bold p-2 sm:p-4 text-white"
                  onClick={() => handleChoose(item)}
                >
                  {item}
                </li>
              </ul>
            );
          })}
        {/* </div> */}
      </Popover>
    </>
  );
}
