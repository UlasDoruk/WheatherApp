import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/weatherSlice'

function SearchBar() {

  let dispatch = useDispatch()

  const [search,setSearch] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(fetchData(search))
    setSearch("")
  }

  return (
    <div className='m-8'>
      <form onSubmit={handleSubmit}>
        <input value={search} className='rounded m-2 p-1' type={"text"} placeholder="Search a City" onChange={(e)=>setSearch(e.target.value)}></input>
        <button className='bg-slate-500 rounded p-1 m-2 font-bold text-white' type='submit' >Search</button>
      </form>
    </div>
  );
}

export default SearchBar