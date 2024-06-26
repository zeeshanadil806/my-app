"use client"
import { useState } from "react"
import React from 'react'

export default function Filter() {
    const arr = ["Apple" , "Mango" , "Banana" , "Grapes" , "Orange" , "Oreo"];
  return ( 
    <div>
        {/* {arr.map((name , id) => (
            <li key={id}>{name}</li>
        ))} */}
        {/* {arr.filter(name => name.includes("a")).map((name , id) => (
            <ul key={id}>{name}</ul>
        ))}
        {arr.sort().map((name , id) => (
            <ul key={id}>{name}</ul>
        ))} */}
        {arr.filter(a => a.includes("a")).sort().map(name => (
            <ul key={name}>{name}</ul>
        ))}
    </div>
  )
}
