"use client"
import { useState , useEffect } from "react"

export default function Timer() {
    const [seconds , setSeconds] =  useState<number>(10);
    useEffect(() => {
        if(seconds>0){
            const interval = setInterval(() => {
                setSeconds(prevState => prevState - 1)
            },1000)
            return () => clearInterval(interval)
        }
    },[seconds]
)
  return (
    <div>
        <p>You have {seconds} Seconds left.</p>
        <p className="text-4xl font-bold">
        {seconds=== 0 && "Boom!!"}
        </p>
    </div>
  )
}
