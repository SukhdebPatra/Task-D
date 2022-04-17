import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <>
  <div>
      <ul className="nav-ul">
          <li>
              <Link to='/home'>Home</Link>

          </li>
          <li><Link to='login'>LogIn</Link></li>
      </ul>
  </div>
  </>;
};

export default Navbar;
