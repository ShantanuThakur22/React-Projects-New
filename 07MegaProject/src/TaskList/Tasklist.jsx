import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function Tasklist({ data }) {
  // console.log(data);
  return (
    <div className=" flex justify-start flex-nowrap items-center gap-5 h-[55%] w-full  mt-10 py-5 overflow-x-auto  ">
      {data.tasks.map((items,index) => {
        if (items.active) return <AcceptTask key={index} data={items}/>;
        if (items.newTask) return <NewTask key={index} data={items}/>;
        if (items.completed) return <CompleteTask key={index} data={items}/>;
        if (items.failed) return <FailedTask key={index} data={items}/>;
      })}
    </div>
  );
}

export default Tasklist;
