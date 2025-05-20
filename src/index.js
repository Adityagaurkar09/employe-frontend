import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home';
import Add from './view/Add';
import Details from './view/Details';
import Update from './view/Update';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add',
    element: <Add />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/update/:id',
    element: <Update />,
  }
])
root.render(<RouterProvider router={router}/>);
