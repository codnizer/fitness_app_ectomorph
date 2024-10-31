import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
const Navbar = () => {
    const { user, logout,userData } = useAuth(); // Get user data and logout function

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out the user
            console.log('User logged out successfully');
            navigate('/login'); // Optional: Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    useEffect(() => {
      console.log(userData)
    }, [])
    
  return (
    <div className="navbar fixed bg-base-100 text-white-400 z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu flex items-center cairo-bold menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a onClick={()=>navigate('/')}>Homepage</a></li>
          <li><a onClick={()=>navigate('/')}>Meals</a></li>
          <li><a onClick={()=>navigate('/')}>Calories Calculator</a></li>
           
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn cairo-bold btn-ghost text-xl">Ectomorph Fitness</a>
    </div>
    <div className="navbar-end">
      {/* <button className="btn btn-ghost btn-circle">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button> */}
      <button className="btn btn-ghost btn-circle">
        
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
           
            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {userData ? <li>
          <a className="justify-between" onClick={()=>navigate("/profile")}>
          {userData?.username}'s Profile
            
          </a>
        </li> : <></> }
        {userData ? <></> : <li><a className="justify-between" onClick={()=>navigate("/register")} >Register</a>
        </li> }
        <li>
            {
                user? <a onClick={logout}>Log Out</a> : <a onClick={()=> navigate('/sign-in')}>Sign In</a>
            }
            

            </li>

        
      </ul>
    </div>
  


      </button>
    </div>
  </div>
  )
}

export default Navbar