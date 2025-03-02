import React from 'react'
import Button from './Button'

export default function SlideBar({onStartAddProject,allProject,onSelect}) {


  return (
    <div className='block bg-gray-200 w-1/3 h-100% px-8 py-8'>
      <h3>Your Projects List</h3>
      <Button onClick={onStartAddProject} >ADD+</Button>
      {allProject.projects.map((item)=> {

        return <div className="mt-4" key={item.id}>
           <button onClick={()=> onSelect(item.id)} >{item.title}</button>
        </div>

      })}
    </div>
  )
}
