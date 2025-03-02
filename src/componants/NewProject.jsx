import React from 'react'
import Input from './Input'
import NoProjectSelected from './NoProjectSelected';
import Modal from './Modal';

export default function NewProject({addProject,close,cancel}) {
  
  const modal = React.useRef();

  const title = React.useRef();
  const description = React.useRef();
  const date = React.useRef();

  function handleSave() {
   const enteredTitle = title.current.value;
   const enteredDesc = description.current.value;
   const enteredDate = date.current.value;

   //Validation
   if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDate.trim() === '') {
      modal.current.open();
      return
   }

   addProject({title: enteredTitle, enteredDesc: enteredDesc, enteredDate: enteredDate});
   close()
   cancel()

  }

  return (
   <>
      <Modal ref={modal} caption='Close'>
         <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
         <p className='text-stone-600 my-4'>Opps! looks like you forgot to enter a value.</p>
         <p className='text-stone-600 my-4'>Please make sure you provide a valid for every input filed.</p>
      </Modal>
      <div className='w-[35rem] mt-16 mx-16'> 
      <menu className='flex item-center justify-end gap-4'>
         <li><button className='px-6 py-2  text-stone-800' onClick={cancel}>Cancel</button></li>
         <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
      </menu>
      <div className='py-10'>
         <Input type='text' ref={title} label="Title" />
         <Input ref={description} label="Description" textarea />
         <Input type='date' ref={date} label="Date" />
      </div>
      </div>
   </>
  )
}
