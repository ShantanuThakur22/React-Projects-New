import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const contextData = useContext(AuthContext);
  // console.log(contextData)

  useEffect(()=>{
      const loggedInUser= localStorage.getItem('loggedInUser')

      if(loggedInUser){
        const userData= JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  },[])

  function handleLogin(email, password) { //HandleLogin taking input email and password from Login.jsx
    if (contextData && contextData.admin.find((e) => email == e.email && password == e.password) ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}));
      
    } else if (contextData) {
      const employee = contextData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem("loggedInUser",  JSON.stringify({ role: "employee",data:employee }))
        setLoggedInUserData(employee)
      }
    } else {
      alert("Invalid Creadential");
    }
  }

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user == 'employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </> 
  );
}

export default App;
