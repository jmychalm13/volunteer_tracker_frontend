import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);
  // const sidebar = document.getElementById("sidebar");
  // const openSidebarButton = document.getElementById("open-sidebar");

  // openSidebarButton.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   sidebar.classList.toggle("-translate-x-full");
  // });

  // document.addEventListener("click", (e) => {
  //   if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
  //     sidebar.classList.add("-translate-x-full");
  //   }
  // });

  const toggleDrawer = () => {
    if (drawerRef.current.classList.contains("-translate-x-full")) {
      drawerRef.current.classList.remove("-translate-x-full");
      drawerRef.current.classList.add("translate-x-0");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      drawerRef.current.classList.add("-translate-x-full");
      drawerRef.current.classList.remove("translate-x-0");
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      drawerRef.current.classList.add("-translate-x-full");
      drawerRef.current.classList.remove("translate-x-0");
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  return (
    <div>
      <div
        ref={drawerRef}
        className="absolute bg-cyan-500 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
        id="sidebar"
      >
        <div className="p-4 text-slate-800">
          <h1 className="text-2xl font-semibold">Menu</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <Link to="/login" className="block hover:text-[#E6AACE]">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-[#E6AACE]">
                Another
              </a>
            </li>
            <li className="mb-2">
              <Link to="/hours" className="block hover:text-[#E6AACE]">
                Log Hours
              </Link>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-[#E6AACE]">
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-cyan-100 shadow">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-2">
              <img src="src/assets/logo-transparent-png.png" alt="" className="h-20" />
              <button
                ref={buttonRef}
                onClick={toggleDrawer}
                className="text-gray-500 hover:text-gray-600"
                id="open-sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
