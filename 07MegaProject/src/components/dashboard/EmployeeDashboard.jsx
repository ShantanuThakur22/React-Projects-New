import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import Tasklist from '../../TaskList/Tasklist'


function EmployeeDashboard({data,changeUser}) {
  // console.log(data)
  return (
    <div>
      <div className='p-20 bg-violet-950 h-screen'>
        <Header data={data} changeUser={changeUser}/>
        <TaskNumber data={data}/>
        <Tasklist data={data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
