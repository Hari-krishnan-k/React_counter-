import React from "react";
import ReactDOM from "react-dom/client"
import "./style.css"
import { useState } from "react";
const x = <h1 className ="text-purple-900 text-[40px]  font-bold tracking-in-contract-bck" >React_Counter</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
const Counter =() => {
    let[count , setCount] = useState(0);
    const changecol = () =>{
        if (count > 0) return "#52f852";
        if (count < 0) return "#fa2626";
        return "#fff831";     
    }
    return(
        <>
        <div className="flex justify-center items-center mt-10">
        <div className = " text-center  space-y-11 bg-[#e7ffe7] w-[400px] h-[400px] shadow-xl">
            <div >{x}</div>
            <div><p className="ml-7 bg-[#52f852] inline p-10 space-y-11 rounded-[170px] border border-green-700 border-2 "
            style= {{backgroundColor: changecol()}} >{count}</p></div>
            <div className = "space-y-11 space-x-9 ml-10" >
            <button onClick={()=>{
            setCount(count+1);
        }} className="bg-green-500 p-5 rounded-xl hover:bg-green-100 border border-green-500 hover:shadow-[0_0_17px_green] p-4">Increment</button>
                <button onClick={()=>{
            setCount(count-1);
        }} className="bg-red-500 p-5 rounded-xl hover:bg-red-100 border border-red-500 hover:shadow-[0_0_17px_red] p-4">Decrement</button>
            </div >

            <button onClick={()=>{
            setCount(count=0);
        }} className= "bg-blue-500  ml-9 p-5 rounded-xl hover:bg-blue-100 border border-blue-500 hover:shadow-[0_0_17px_blue] p-4">Increment</button>
        </div>
        </div>

        

        
        </>
    );

}
root.render(<Counter />);