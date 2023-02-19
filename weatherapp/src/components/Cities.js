import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchDaily, fetchData } from '../redux/weatherSlice';

function Cities() {

    const cities = ["New York", "London","Madrid","Paris","Berlin","Ankara", "Tokyo", "Sydney"];

    let dispatch = useDispatch()

    const handleChoose=(item)=>{
        dispatch(fetchData(item))
    }

  return (
    <>
    {cities.map((item,index)=>{
        return (
          <button key={index} className='font-bold  bg-sky-900 p-2 border-gray-800 border-solid   text-blue-50' onClick={()=>handleChoose(item)}>{item}</button>
        );
    })}
     
    </>
  );
}

export default Cities