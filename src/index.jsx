import { createRoot } from 'react-dom/client';
import React from 'react';
import Web from './web';
import { FirstPage } from './FirstPage';
import MainContext from './context/mainContext';
import QuizResult from './QuizResult';
import Main from './loginindex';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <QuizResult />,
  // <FirstPage />,
  <MainContext>
    <Main />
  </MainContext>,

);
