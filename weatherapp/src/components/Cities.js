import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchDaily } from '../redux/weatherSlice';

function Cities() {

    const cities = ["New York", "London","Madrid","Paris","Berlin","Ankara", "Tokyo", "Sydney"];

    let dispatch = useDispatch()

    const handleChoose=(item)=>{
        dispatch(fetchDaily(item))
    }

  return (
    <>
    {cities.map((item,index)=>{
        return (
          <button
            key={index}
            className="focus:bg-blue-300 hover:bg-slate-900 font-bold  bg-sky-900 p-4 text-blue-50"
            onClick={() => handleChoose(item)}
          >
            {item}
          </button>
        );
    })}
     
    </>
  );
}

export default Cities