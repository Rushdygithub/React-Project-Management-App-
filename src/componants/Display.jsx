import React from 'react'
import Button from './Button';

export default function Display({info,deleteItem}) {
  console.log(info)
  const dateFormate = new Date(info.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className='px-4'>
      <header>
        <div className='mt-5 flex gap-8 items-center'>
        <h1>{info.title}</h1>
        <Button onClick={deleteItem}>DELETE</Button>
        </div>
        <div className='mt-8'>
        <p>{dateFormate}</p>
        <p className='mt-2'>{info.description}</p>    
        </div> 
      </header>
      TASKS
    </div>
  )
}
