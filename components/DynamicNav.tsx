"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button';

export default function DynamicNav() {
    const [link , setLink] =  useState<string>("");
    const [links , setLinks] =  useState<string[]>([]);
    const [linkPath , setLinkPath] =  useState<string>("");
    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value);
    }
    function createLink(){
        setLinks([...links , link])
        setLinkPath(link.toLocaleLowerCase().replaceAll(" " ,"-"))
    }
  return (
    <div>
        <input type="text" className='p-2 border border-black rounded-md' placeholder='Enter Link ...' value={link} onChange={handleChange}/>
        <Button onClick={createLink}>Add Link</Button>
        {links.map((item, index) => (
            <ul key={index}>
                <Link href={'/'+linkPath}>{item}</Link>
            </ul>
        ))}
        <Link href={'/'}></Link>
    </div>
  )
}
