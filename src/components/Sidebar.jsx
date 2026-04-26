import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sl, setSl] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleSl = ()=>{
    setSl(!sl);
  }

  return (
    <div className="relative">
      {/* Menu Button */}
     <button
        className={`p-2 bg-blue-500 text-white rounded-md`}
        onClick={toggleSidebar}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            className="mb-4 p-2 bg-red-500 rounded"
            onClick={toggleSidebar}
          >
            ✕ Close
          </button>
          <nav className="flex flex-col space-y-4">
            <ul className="list-none flex flex-col space-y-4">
              <li><NavLink className="hover:text-blue-400" to='/' >Home</NavLink></li>
              <li><NavLink className="hover:text-blue-400" to='/about' >About</NavLink></li>
              <li><button className="hover:text-blue-400" onClick={handleSl}>
                Services
              </button></li>
              {sl && (<li><NavLink className="hover:text-blue-400 w-full text-gray-300" to='/todo' >Todo</NavLink></li>)}
              
              <li><NavLink className="hover:text-blue-400" to='/contacts' >Contacts</NavLink></li>
            </ul>
          </nav>
 
        </div>
      </div>

      {/* Overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )} */}
    </div>
  );
};


export default Sidebar;
