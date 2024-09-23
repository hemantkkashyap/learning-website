import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div class="p-4 w-full">
        <div class="p-2 text-gray-900 bg-white rounded-lg shadow-lg">
          <span class="px-2 mr-2 border-r border-gray-800">
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt="alt placeholder"
              class="w-8 h-8 -mt-1 inline mx-auto"
            />
          </span>
          <span class="px-1 cursor-pointer hover:text-gray-700">
            <i class="fas fa-stream p-2 bg-gray-200 rounded-full"> </i>
          </span>
          <span class="px-1 cursor-pointer hover:text-gray-700">
            <i class="fas fa-search p-2 bg-gray-200 rounded-full"> </i>
          </span>
          <span class="px-1 cursor-pointer hover:text-gray-700">
            <i class="fas fa-th p-2 bg-gray-200 rounded-full"> </i>
          </span>
          <span class="px-1 cursor-pointer hover:text-gray-700">
            <i class="w-8 fas fa-calendar-alt p-2 bg-gray-200 rounded-full"></i>
          </span>
          <span class="px-1 w-8 relative cursor-pointer hover:text-gray-700">
            <i class="fas fa-bell p-2 bg-gray-200 rounded-full"> </i>
            <span class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
              3
            </span>
          </span>
          <span class="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
            <i class="fas fa-user p-2 bg-gray-200 rounded-full"> </i>
            <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
              3
            </span>
          </span>
        </div>
      </div> */}

<div className="p-4 w-full fixed">
        <div className="p-2 text-gray-900 bg-white rounded-lg shadow-lg flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="px-2 mr-4 border-r border-gray-800">
              <img
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8"
              />
            </span>

            {/* Navigation Links */}
            <Link  to={'/'}>
            <span className="px-3 cursor-pointer hover:text-gray-700">Home</span></Link>
            <Link to={'/courses'} >
            <span className="px-3 cursor-pointer hover:text-gray-700">Courses</span></Link>
            <span className="px-3 cursor-pointer hover:text-gray-700">About</span>
            <span className="px-3 cursor-pointer hover:text-gray-700">Contact</span>
          </div>

          {/* Right Side (Login and Signup) */}
          <div className="flex items-center">
            <button className="px-4 py-2 mx-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              Login
            </button>
            <button className="px-4 py-2 mx-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50">
              Signup
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
