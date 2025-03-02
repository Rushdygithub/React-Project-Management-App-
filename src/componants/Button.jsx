import React from 'react'

export default function Button({children,...props}) {
  return (
    <>
      <button  className='bg-black text-white border rounded-md mt-3 px-4  py-2' {...props}>{children}</button>
    </>
  )
}
