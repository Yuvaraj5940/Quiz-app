import React from 'react';
import clsx from 'clsx';
import { Link, Outlet } from 'react-router-dom';
import './style.scss';
import Web from './web';
import ProgressBar from './progressbar';
import { Contextmain } from './context/mainContext';

// export const Contextmain = createContext();
function FirstPage() {
  return (

    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-orange-600 to-yellow-500 ">

      <div className="flex items-center justify-center ">
        <Link to="auth" className="btn border rounded-md">Start Quiz</Link>
      </div>
      <Outlet />

      {/* <Web /> */}

    </div>

  );
}
export default FirstPage;
