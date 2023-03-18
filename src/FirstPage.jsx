import React, { createContext, useContext } from 'react';
import clsx from 'clsx';
import Web from './web';
import ProgressBar from './progressbar';
import { Contextmain } from './context/mainContext';


// export const Contextmain = createContext();
export function FirstPage() {

  return (

    <div className="body">
     
      <Web />

    </div>

  );
}
