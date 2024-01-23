"use client"
import { useState } from "react"

import React from 'react'

export default function TextColorChanger() {
    const [colors, setColor] = useState("");
    function colorChanger(e:React.ChangeEvent<HTMLInputElement>){
        setColor(e.target.value);
    }
  return (
    <div>
        <input type="color" value={colors} onChange={colorChanger}/>
        <p style={{
            color:colors,
        }}>Text</p>
    </div>
  )
}
