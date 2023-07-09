import React,{useEffect,useState} from "react";

const UseEff =()=>{
    const[count,setCount]=useState(1)
    useEffect(()=>{
        console.warn(count)
    })
    return(<div>
        <h1>Use Effect In React =={count} </h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>)
}
export default UseEff;