import React, { createContext, useState } from 'react';

// export const Contextmain = createContext();
export default function MainContext(props) {
  const [sr, setSr] = useState(0);
  return (
    <Contextmain.Provider
    >
      {props.children}
    </Contextmain.Provider>
  );
}
