import React from 'react'
import Button from './Button'

export default function NewTask({handleInput,onAdd}) {

  const [task,setTask] = React.useState('');

  function handleChange(event) {
    const task = event.target.value;
    setTask(task);
    // return handleInput(task)

  }

  function handleClick() {
    onAdd(task);
    setTask('');
  }

  return (
    <div className='flex item-center gap-4 mt-5'>
      <input onChange={handleChange} value={task} type="text" className='border-blue border-2 border-solid'/>
      <Button onClick={handleClick} >ADD SUB TASK+</Button>
    </div>
  )
}
