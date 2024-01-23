"use client"
import { useState } from "react"

export default function Counter() {
    const [count , setCount] = useState(0);
    function addition(){
            setCount(count + 1);
    }
    function subtract(){
        if(count>0){
            setCount(count - 1);
        }
    }
  return (
    <div>
        <button onClick={addition}>Add</button>
        <p>{count}</p>
        <button onClick={subtract}>Sub</button>
    </div>
  )
}
