import Searchbar from "./Searchbar";
import Cities from "./Cities";

function Navbar() {


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
      <div className="flex justify-center">
        <Searchbar />
        <Cities />
      </div>
    </div>
  );
}

export default Navbar