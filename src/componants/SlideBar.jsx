import React from 'react'
import Button from './Button'

export default function SlideBar({onStartAddProject,allProject,tabClick}) {


  return (
    <div className='block bg-gray-200 w-1/3 h-100% px-8 py-8'>
      <h3>Your Projects List</h3>
      <Button onClick={onStartAddProject} >ADD+</Button>
      {allProject.projects.map((item)=> {
        return <div className="tab-buttons" key={item.id}>
           <button>{item.title}</button>
        </div>
      })}
       {/* <div class="tab-buttons">
          <button className='block'>Company Work</button>
          <button className='block'>Udemy Work</button>
       </div> */}
    </div>
  )
}
