import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
  const authData= useContext(AuthContext)

  return (
    
    
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48  '>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-baseline rounded'>
        <h2 className='w-1/5 '>Employee</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>

      </div>
      <div className=' overflow-auto'>
        {authData.employees.map((items)=>(
        <div className=' mb-2 py-2 px-4 flex justify-baseline rounded'>
        <h2 className='w-1/5'>{items.firstName}</h2>
        <h3 className='w-1/5 bg-blue-800 text-center'>{items.taskCounts.newTask}</h3>
        <h5 className='w-1/5 bg-yellow-600 text-center'>{items.taskCounts.active}</h5>
        <h5 className='w-1/5 bg-green-400 text-center'>{items.taskCounts.completed}</h5>
        <h5 className='w-1/5 bg-red-600 text-center'>{items.taskCounts.active}</h5>

      </div>
      ))}
      </div>
      

    </div>
  )
}

export default AllTask
