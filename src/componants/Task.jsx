import React from 'react'
import NewTask from './NewTask'

export default function Task({tasks,onAdd,onDelete}) {
  console.log(tasks)
  return (
    <section>
       <h2 className='text-xl font-bold text-stone-700'>Task</h2>
       <NewTask onAdd={onAdd} />
      

       {tasks.length === 0 &&  <p className='text-stone-800 mt-4'>This project does not have any task yet</p>}
       {tasks.length > 0 && 
       <ul className='p-4 mt-8 rounded-md bg-stone-100'>
         {tasks.map((item) => {
             return <li key={item.id} className='flex justfy-between my-4 gap-4'>
              <h2 className='text-stone-600'>{item.task}</h2>
              <button className='text-stone-1000 hover:text-red-500'>Clear</button>
             </li>
         })}
        </ul>
       }
       
    </section>
  )
}
