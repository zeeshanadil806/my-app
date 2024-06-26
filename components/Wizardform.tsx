"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'

type FormDataProps = {
    name:string;
    email:string;
    pass:string;
}
export default function Wizardform() {
    const [step , setStep] = useState<number>(1);
    const [nameH , setName] = useState<string>("")
    const [emailH , setEmail] = useState<string>("")
    const [passwordH , setPassword] = useState<string>("")
    const [formData , setFormData] = useState<FormDataProps[]>([]);

    function handleNext(){
        if(nameH.trim() !== "" || step <= 2  && emailH.trim() !== ""){
                setStep(step+1);
        }
    }
    function handlePrevious(){
        setStep(step-1);
    }
    function handleSubmit(){
        if(nameH.trim() !== "" && emailH.trim() !== "" && passwordH.trim() !== ""){
            const obj = {name:nameH , email:emailH , pass:passwordH};
            setFormData([...formData , obj])
            setStep(0);
        }else{
            const err = alert("Fill all inputs");
        }
    }
  return (
    <div>
        <form className='flex flex-col items-center'>
            {/* Name */}
            {step === 1 && (
                <div className='flex items-center space-x-6'>
                <label htmlFor="name">Name</label>
                <input type="text" className='border border-gray-700 rounded-md p-1' placeholder='Enter Name' value={nameH} onChange={(e) => setName(e.target.value)}/>
                <Button onClick={handleNext}>Next</Button>
            </div>
            )}
            
            {/* Email */}
            {step === 2 && (

                <div className='flex items-center space-x-6'>
            <label htmlFor="email">Email </label>
                <input type="email" className='border border-gray-700 rounded-md p-1' placeholder='Enter Email' value={emailH} onChange={(e) => setEmail(e.target.value)}/>
                <Button onClick={handleNext}>Next</Button>
                <Button onClick={handlePrevious}>Previous</Button>
            </div>
            )}
            {/* Pass */}
            {step === 3 && (
                <div className='flex items-center space-x-6'>
            <label htmlFor="Password">Password</label>
                <input type="password" className='border border-gray-700 rounded-md p-1' placeholder='Enter Password' value={passwordH} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handlePrevious}>Previous</Button>
                {step ===3 && <Button onClick={handleSubmit}>Submit</Button>}
            </div>
                )}
        </form>
            <div className='text-center'>

        {formData.map(data => (
            <div key={data.name}>
                <p>UserName : {data.name}</p>
                <p>Email : {data.email}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
