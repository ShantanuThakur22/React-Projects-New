import React from "react";
import { setLocalStorage } from "../utils/LocalStorage";

//This Header is for Employee Dashboard

function Header({data,changeUser}) {

  // console.log(data)

  function logOutUser(){
    localStorage.setItem('LoggedInUser','')
    console.log(changeUser)
    changeUser('')
    // window.location.reload()
  }
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Shantanu 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-700 rounded-sm p-2 text-lg font-medium">Log out</button>
    </div>
  );
}

export default Header;
