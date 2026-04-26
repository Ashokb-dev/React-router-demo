import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Sidebar />
      <h1 className="text-2xl mt-6">Welcome to My Website</h1>
      <p className="mt-4">This is a sample website using React and Tailwind CSS.</p>
      
      <Outlet />
    </div>
  );
}

export default App;
