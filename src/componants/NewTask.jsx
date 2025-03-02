import React from 'react'
import Button from './Button'
import Modal from './Modal';

export default function NewTask({handleInput,onAdd}) {

  const [task,setTask] = React.useState('');
  const modal = React.useRef();

  function handleChange(event) {
    const task = event.target.value;
    setTask(task);
  }

  function handleClick() {
    if(task === '') {
      modal.current.open();
      return
    }
    onAdd(task);
    setTask('');
  }

  return (
    <>
      <Modal ref={modal} caption='Close'>
         <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
         <p className='text-stone-600 my-4'>Opps! looks like you forgot to enter a value.</p>
         <p className='text-stone-600 my-4'>Please make sure you provide a valid for every input filed.</p>
      </Modal>
    <div className='flex item-center gap-4 mt-5'>
      <input onChange={handleChange} value={task} type="text" className='border-blue border-2 border-solid'/>
      <Button onClick={handleClick} >ADD SUB TASK+</Button>
    </div>
    </>
  )
}
