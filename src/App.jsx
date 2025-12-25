import { useState } from 'react'
import {Trash } from 'lucide-react'


const App = () => {

 const [title, setTitle] = useState('')
 const [detail, setDetail] = useState('')

 const [task, setTask] = useState([]) //array of tasks, empty initially

  const submitHandler = (e) => {
    e.preventDefault(); //to prevent reloading of page on form submission

    const copyTask = [...task] //create a copy of task array
    copyTask.push({title, detail})
    setTask(copyTask)
  
    setTitle('')
    setDetail('')
  }

  function deleteTask(index) {
    const copyTask = [...task];  //here copy task is a new array
    copyTask.splice(index, 1); //remove one element at the given index
    setTask(copyTask);

  }

   

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
     name="username"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
      />

     <textarea className='bw-full p-3 rounded-lg w-full h-40 bg-black text-white border border-cyan-500 outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
    transition-all duration-300'
     placeholder="Write a note" 
     name="message"
     value={detail}
     onChange={(e)=>{
      setDetail(e.target.value)
     }}></textarea>

     <button className='bg-cyan-400 w-full text-black px-5 py-2 rounded-4xl hover:bg-cyan-600'>Add Note</button>

     </form>

     <div className='flex flex-col lg:w-1/2 p-10 lg:border-l-2'>
     <h1 className='font-bold text-3xl'>Recent Notes</h1>
     <div className='flex gap-5 flex-wrap mt-5 overflow-auto h-full justify-start items-start'>
     
    {task.map((elem, index) => (
      <div key={index} className='bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] flex flex-col justify-between bg-cover text-cyan-800 pt-9 pb-3 px-5 rounded-xl w-40 h-52'>
        <div>
        <h2 className='font-bold text-xl mb-2'>{elem.title}</h2>
        <p className='text-sm text-black line-clamp-5 wrap-break-word overflow-y-auto'>{elem.detail}</p>
        </div>
        <button onClick={() => {
          deleteTask(index)} }
          className='flex justify-end cursor-pointer hover:text-red-600 hover:scale-110 hover:duration-500 hover:ease-in'><Trash /></button>
      </div>
    ))}

     </div>
     </div>


    </div>
    
  )
}

export default App
