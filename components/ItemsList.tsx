"use client"
import React from 'react'
import { Button } from './ui/button'
import { useState } from 'react'

export default function ItemsList() {
  const [item, setItem] = useState<string>("");
  const [itemsList, setItemsList] = useState<string[]>([]);
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value);
  }
  function handleAddItem() {
    if (item.trim() !== "") {
      setItemsList([...itemsList, item]);
      setItem("");
    }
  }
  function removeItem(indexToRemove:number) {
    const updated = itemsList.filter((_ , index) => index !== indexToRemove);
    setItemsList(updated);
  };
  
  return (
    <div>
      <input type="text" className='border border-black rounded-md p-2 outline-none' placeholder='Enter Item' onChange={handleInput} value={item} />
      <Button onClick={handleAddItem}>Add Item</Button>
      {itemsList.map((item, index) => (
        <div key={index} className='flex space-x-2 space-y-3 items-center'>
          <p>{item}</p>
          <Button onClick={() => removeItem(index)}>Remove Item</Button>
        </div>
      ))}
    </div>
  )
}
