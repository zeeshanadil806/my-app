import React from 'react'
import { Posts } from '@/typings'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function DataFetch() {
  const post = await getData();
  return (
    <div>
      {post.map((Post:Posts)=>(
        <div key={Post.id}>
          <h1>{Post.title}</h1>
          <p>{Post.body}</p>
        </div>
      ))}
    </div>
  )
}
