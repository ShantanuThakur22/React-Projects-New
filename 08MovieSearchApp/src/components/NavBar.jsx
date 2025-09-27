import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/" className="border rounded-xl p-2">Movies App</Link>
      </div>
      <div className="mt-5 flex justify-center gap-1">
        <Link to='/' className="border rounded-xl p-2">Home</Link>
        <br />
        <Link to='/favouirets' className="border rounded-xl p-2">Favourites</Link>
      </div>
    </div>
  );
}

export default NavBar;
