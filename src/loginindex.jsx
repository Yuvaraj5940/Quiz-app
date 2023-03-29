import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainContext from './context/mainContext';
import FirstPage from './FirstPage';
import QuizResult from './QuizResult';
import Web from './web';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage />,
  },
  {
    path: '/auth',
    element: <Web />,
    children: [
      {
        index: true,
        element: <QuizResult />,
        replace: true,
      },

    ],
  },
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
