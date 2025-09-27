import React, { useState } from 'react'

function CreateTask() {

  const[taskTitle,setTaskTitle] = useState('')
  const[date,setDate] = useState('')
  const[assignTo,setAssignTo] = useState('')
  const[category,setCategory] = useState('')
  const[description,setDescription] = useState('')

  const[newTasks,setNewTasks]= useState({})

  function submitHandler(e){
    e.preventDefault()
    console.log('Form Submitted')
    

    setNewTasks({taskTitle,date,assignTo,category,description,active:false,newTask:true,failed:false,completed:false})
    const data=JSON.parse(localStorage.getItem('employees'))
    console.log(data)

    data.map((items)=>{
      if(assignTo == items.firstName){
        items.tasks.push(newTasks)
        items.taskCounts.newTask += items.taskCounts.newTask
        console.log(items)
      }
    })
    localStorage.setItem('emoloyees',JSON.stringify(data))
    // setTaskTitle('')
    // setDate('')
    // setAssignTo('')
    // setCategory('')
    // setDescription('')
  }
  return (
    <div>
      <div>
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full bg-[#1c1c1c] items-start justify-between mt-5 p-8  "
        >
          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input type="text" placeholder="Make your design" className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent  border-gray-400 mb-4 border-[1px]"
            value={taskTitle}
            onChange={(e)=> setTaskTitle(e.target.value)}/>
            <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input type="date" className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent  border-gray-400 mb-4 border-[1px] " 
            value={date}
            onChange={(e)=> setDate(e.target.value)}/>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input type="text" placeholder="Employee name" className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent  border-gray-400 mb-4 border-[1px] "
            value={assignTo}
            onChange={(e)=> setAssignTo(e.target.value)}/>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input type="text" placeholder="Design Dev etc" className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent  border-gray-400 mb-4 border-[1px]"
            value={category}
            onChange={(e)=> setCategory(e.target.value)}/>
          </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea name="" id="" className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 "
            value={description}
            onChange={(e)=> setDescription(e.target.value)}></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-800 px-5 rounded mt-4 text-sm ">Create Task</button>
          </div>
          
          
        </form>
      </div>
    </div>
  )
}

export default CreateTask
