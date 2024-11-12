import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const Navbar = () => {
const {user,signOutuser}=useContext(AuthContext)
console.log(user);
const handleSignOut=()=>{
  
    signOutuser()
    .then(() => {
       console.log('success sign out');
      }).catch((error) => {
        console.log("error ",error.message);
      });
      
}
    const list=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink  to="/register">Register</NavLink></li>
{
       user&& <>
       <li><NavLink  to="/orders">orders</NavLink></li>
       <li><NavLink  to="/profile">Profile</NavLink></li>
       </>
       
}
 
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {
           list}
            </ul>
          </div>
          <div className="ml-3">
                    {user ? (
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleSignOut} className="btn ml-2">Sign Out</button>
                        </>
                    ) : (
                        <Link to="/login" className="btn">Login</Link>
                    )}
                </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
           list}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;