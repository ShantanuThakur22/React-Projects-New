import React, { useState } from "react";

const Login = ({handleLogin}) => {

  
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  

  const submihandler = (e) => {
    e.preventDefault();
    setEmail('')
    setPasswrod('')
    handleLogin(email,password)
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={submihandler}
        >
          <input
            required
            type="email"
            placeholder="enter your email"
            className="border-2 border-emerald-600 rounded-full text-xl text-black outline-none bg-transparent py-5 px-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="enter password"
            className="border-2 border-emerald-600 rounded-full text-xl text-black outline-none bg-transparent py-5 px-3 mt-5"
            value={password}
            onChange={(e) => setPasswrod(e.target.value)}
          />

          <button className="border-none bg-emerald-600 rounded-full text-xl text-white outline-none  py-5 px-3 mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
