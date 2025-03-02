import React from 'react'
import Button from './Button';
import Task from './Task';

export default function Display({tasks,info,deleteItem,onAddTask,onDeleteTask}) {
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
      <Task tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  )
}
