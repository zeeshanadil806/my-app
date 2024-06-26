"use client"
import { useState } from "react";
import { Button } from "./ui/button";

export default function Counter() {
  const [count , setCount] = useState(1);
  function handleIncrement(){
    if(count<10)
    setCount(count+1);
  }
  function handleDecrement(){
    if(count>1)
    setCount(count-1);
  }
  return (
    <div className="flex justify-center mt-5">
      <Button onClick={handleDecrement}>-</Button>
      <p className="text-2xl">{count}</p>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  )
}
