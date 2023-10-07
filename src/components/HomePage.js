import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-gray-800 mt-4 mb-6">Welcome to Your Space</h1>
      <div className="flex flex-row  space-x-10 mt-[150px]">
        <Link
          to="/TaskList"
          className="text-2xl w-[250px] h-[250px] bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-3 rounded-lg transition duration-300 mb-2 text-center"
          
        >
          Go to Task List
        </Link>
        <Link
          to="/FocusTimer"
          className=" text-2xl w-[250px] h-[250px] bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-3 rounded-lg transition duration-300 mb-2 text-center"
          
        >
          Go to Focus Timer
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
