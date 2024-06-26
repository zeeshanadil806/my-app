"use client"
import React from 'react'
import { Button } from './ui/button'
import { useState } from 'react'
import "@stylings/animation.css"
export default function AnimationOnState() {
    const [animation , setAnimation] = useState<boolean>(false);
    function handleAnimation() {
        setAnimation(!animation)
    }
  return (
    <div className='flex items-center justify-center'>
        <Button onClick={handleAnimation}>{animation ? "Fade Out" : "Fade In"}</Button>
        <p className={animation ? 'fade-in' : "fade-out"}>Let me Fade.</p>
    </div>
  )
}
