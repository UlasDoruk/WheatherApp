import React from 'react'

function SearchBar() {
  return (
    <div className='m-8'>
      <form>
        <input className='rounded m-2 p-1' type={"text"} placeholder="Search a City"></input>
        <button className='bg-slate-500 rounded p-1 m-2 font-bold text-white' >Search</button>
      </form>
    </div>
  );
}

export default SearchBar