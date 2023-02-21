import { useState } from 'react'
import { useDispatch } from "react-redux";
import { fetchDaily } from '../redux/weatherSlice';
import Cities from "./Cities";

function Navbar() {

  let dispatch = useDispatch()

  const [search,setSearch] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(search){
    dispatch(fetchDaily(search));
    setSearch("")
    }else{
       window.alert("Search a City");
    }
  }

  return (
    <div className=" sm:flex sm:justify-between p-1 m-2">
      <p className="shadow-md bg-gradient-to-r from-cyan-200 to-blue-300 rounded sm:w-auto font-bold sm:m-2 p-2  flex justify-center">
        WEATHERAPP
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
      </p>
      <form
        className="sm:ml-10 flex justify-center align-baseline "
        onSubmit={handleSubmit}
      >
        <input
          value={search}
          className="rounded p-2  mt-2 mb-2 w-full"
          type={"text"}
          placeholder="Search a City"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className="hover:scale-105 bg-blue-800 rounded  mt-2 mb-2 p-2 sm:font-bold text-white"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="sm:w-6 sm:h-6 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <Cities />
      </form>
    </div>    
  );
}

export default Navbar