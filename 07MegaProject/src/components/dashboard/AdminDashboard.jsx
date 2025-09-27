
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";


function AdminDashboard({changeUser}) {
  
  return (
    <div className="h-screen w-full p-7 ">
      <Header changeUser={changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard;
