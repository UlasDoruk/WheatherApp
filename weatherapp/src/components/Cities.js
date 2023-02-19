import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/weatherSlice';

function Cities() {

    const cities = ["New York", "London","Madrid","Paris","Berlin", "Tokyo", "Sydney"];

    let dispatch = useDispatch()

    const handleChoose=(item)=>{
        dispatch(fetchData(item))
    }

  return (
    <>
    {cities.map((item,index)=>{
        return (
          <button key={index} className='font-bold  bg-slate-100 p-2 ' onClick={()=>handleChoose(item)}>{item}</button>
        );
    })}
     
    </>
  );
}

export default Cities