import { AxiosError } from 'axios';
import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import axiosInstance from '../utils/axiosInstance';

export const Contextmain = createContext();
export default function MainContext(props) {
  const [sr, setSr] = useState([]);
  const [er, setErr] = useState('');
  const jres = useCallback(
    async () => {
      try {
        const res = await axiosInstance.get('questions');
        // console.log(res.data);
        setSr(res.data);
      } catch (error) {
        console.log('error', error);
        setErr(error);
      }
    },
    [],
  );
  const value = useMemo(() => ({ jres, er, sr }), [sr]);
  return (
    <Contextmain.Provider value={value}>
      {props.children}
    </Contextmain.Provider>
  );
}
