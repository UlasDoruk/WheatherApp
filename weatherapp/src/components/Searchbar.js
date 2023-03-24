import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDaily } from "../redux/weatherSlice";

function Searchbar() {
  let dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(fetchDaily(search));
      setSearch("");
    } else {
      window.alert("Search a City");
    }
  };

  return (
    <form
      className="sm:ml-10 flex justify-center align-baseline "
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        className="rounded-l p-2  mt-2 mb-2 w-full"
        type={"text"}
        placeholder="Search a City"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        className="hover:scale-105 bg-blue-800 rounded-r  mt-2 mb-2 p-2 sm:font-bold text-white"
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
    </form>
  );
}

export default Searchbar;
