import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import "./App.css";
import authservice from "./appwrite/auth";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
        {/* <Outlet/> */} Outlet will be handle later
      </main>
      <Footer/>
    </div>
    </div> : <div>please login</div>;
}

export default App;
