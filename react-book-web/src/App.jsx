import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from './pages/Browse.jsx';
import Ranking from './pages/Ranking.jsx';
import Create from './pages/Create.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // again
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: '*',
        element: <p>Not Found</p>,
      },
    ]
  },
]);

function App() {
  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default App
