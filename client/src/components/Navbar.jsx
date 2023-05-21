import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contextApi/appContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [toggle, setToggle]= useState(false);
  const [auth , setAuth] = useAuth();
  const notifyB = (msg) => toast.success(msg)

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    notifyB("Logout Successfully");
  };

  return (
<nav className=" bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex">
        <div className="flex-shrink-0 flex items-center">
          <NavLink to="/" className='text-purple-300 text-3xl font-bold'>
            Tuner
          </NavLink>
        </div>
      </div>
      <div className="flex">
        <div className="mt-2 ml-2 sm:ml-6 sm:flex sm:items-center text-white">
          <input type="text" placeholder="Search" className="px-4 py-2 border-white rounded-full text-white w-60 ml-4 sm:w-96 bg-gray-700 sm:mt-0 mt-2 h-9" />
        </div>
      </div>
      <div className="ml-2 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
         aria-label="Main menu" aria-expanded="false" onClick={()=>{
          setToggle(!toggle)
         }}>
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
  
  {!auth?.user ? (<div className="invisible sm:visible">
    <div className="flex gap-3 mt-3">
      <NavLink to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Login</NavLink>
      <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-300">|</p>
      <NavLink to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Register</NavLink>
    </div>
  </div>) : (<div className="invisible sm:visible">
    <div className="flex gap-3 mt-3">
      <NavLink to="/myvideos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">My Video</NavLink>
      <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-300">|</p>
      <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Upload</NavLink>
      <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-300">|</p>
      <NavLink to="/" onClick={handleLogout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Sign out</NavLink>
    </div>
  </div>)}
  </div>
  </div>
 {toggle && !auth?.user && <div className="sm:hidden" id="mobile-menu">
  <div className="px-2 pt-2 pb-3 space-y-1">
      <NavLink to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">Login</NavLink>
      <NavLink to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white ">Register</NavLink>
    </div>
</div>}
{toggle && auth?.user && <div className="sm:hidden" id="mobile-menu">
  <div className="px-2 pt-2 pb-3 space-y-1">
      <NavLink to="/myvideos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">My Video</NavLink>
      <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Upload</NavLink>
      <NavLink to="/" onClick={handleLogout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Sign out</NavLink>
   </div>
</div>}
</nav>




  )
}

export default Navbar
