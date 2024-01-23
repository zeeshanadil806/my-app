"use client"
import React, { useState } from "react"

export default function DisplayData() {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [fullName , setFullName] = useState("");
    const [Pass , setPass] = useState("");
    const [click , setClick] = useState(true);

    function firstname(e:React.ChangeEvent<HTMLInputElement>){
        setFirstName(e.target.value);
    }
    function lastname(e:React.ChangeEvent<HTMLInputElement>){
        setLastName(e.target.value);
    }
    function pass(e:React.ChangeEvent<HTMLInputElement>){
        setPass(e.target.value);
    }
    function onFocus(){
        if(click==true){
            // setClick(true);
            setFullName(firstName + " " + lastName);
        }
    }

  return (
    <div>
        <input className="border border-black rounded-md p-1" type="text" value={firstName} placeholder="Enter fist Name : " onChange={firstname}/><br/>
        <input className="border border-black rounded-md p-1" type="text" value={lastName} placeholder="Enter Last Name : " onChange={lastname}/>
        {/* <p>Your Full Name : {firstName} {lastName}</p> */}
        <button onClick={onFocus}>Click me</button>
        <p>{click ? <span>{fullName}</span>: "im not ok"}</p>
        <input className="border border-black rounded-md p-1" type="password" value={Pass} placeholder="Enter Password : " onChange={pass}/>
        <p>Your Password is : {Pass}</p>
    </div>
  )
}
