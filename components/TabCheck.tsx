"use client"
import { useState } from 'react';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import slider1 from "@images/Slider1.jpg"
import slider2 from "@images/Slider2.jpg"
import slider3 from "@images/Slider3.jpg"

type TabsProps ={
    id:number;
    title:string;
    data:string;
    path:any;
}
export default function TabCheck() {
    const tabs:TabsProps[] = [
        {id:1 , title:"Image 1" , data:"Content For tab 1" ,path:slider1},
        {id:2 , title:"Image 2" , data:"Content For tab 2" ,path:slider2},
        {id:3 , title:"Image 3" , data:"Content For tab 3" ,path:slider3},
    ]

    const [activeTab , setActiveTab] = useState<number>(1);
    function handleTab(tabIb:number){
        setActiveTab(tabIb);
    }
  return (
    <div>
        <div className='flex items-center justify-around z-50 absolute w-[100vw] bottom-0'>
        {tabs.map(tab => (
            <div key={tab.id}>
                <button onClick={() => handleTab(tab.id)} className='border border-black rounded-lg'><Image src={tab.path} alt={tab.title} height={100} width={100}/></button>
            </div>
        ))}
        </div>
        {tabs.map(tab => (tab.id === activeTab? <Image src={tab.path} key={tab.id} alt={tab.title} fill priority sizes='100vw'/> : ""))}
    </div>
  )
}
