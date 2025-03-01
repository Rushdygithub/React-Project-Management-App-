import React from 'react'

const Input = React.forwardRef(function Input({label,textarea,...props},ref) {
  return (
    <p className='flex flex-col'>
      <label className="py-4 uppercase" htmlFor="">{label}</label>
      {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props} />}
    </p>
  )
})

export default Input;