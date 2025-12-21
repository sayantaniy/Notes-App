import React, { useState } from 'react'

const App = () => {


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  }

    const [title, setTitle] = useState('')

    return (
    
    <div className='bg-black text-white h-screen lg:flex'>

    <form onSubmit={(e) => {
      submitHandler(e)
    }}
    className='flex flex-col lg:w-1/2 items-start p-10 gap-4'>
     
     <h1 className='font-bold text-4xl'>Add Notes</h1>

     <input className='bg-cyan-800 px-5 py-2 rounded-4xl w-full outline-none'
     type="text" 
     placeholder="Title" 
     name="username" />

     <textarea className='bw-full p-3 rounded-lg w-full h-40 bg-black text-white border border-cyan-500 outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
    transition-all duration-300'
     placeholder="Write a note" 
     name="message"></textarea>

     <button className='bg-cyan-400 w-full text-black px-5 py-2 rounded-4xl hover:bg-cyan-600'>Add Note</button>

     </form>

     <div className='flex flex-col lg:w-1/2 p-10 lg:border-l-2'>
     <h1 className='font-bold text-3xl'>Recent Notes</h1>
     <div className='flex gap-5 flex-wrap mt-5 overflow-auto h-full'>
     <div className='h-52 rounded-2xl w-40 bg-white'></div>
     <div className='h-52 rounded-2xl w-40 bg-white'></div>
     </div>
     </div>


    </div>
    
  )
}

export default App
