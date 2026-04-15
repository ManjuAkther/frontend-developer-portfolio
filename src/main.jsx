
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // layout
    children: [
      {
        path: "/",
        element: <Home />,   // homepage with all sections
      },
      {
        path: "/projects",
        element: <Projects />, // projects page
      },
    ],
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App></App>

//   },
//    {
//     path: "/",
//     element: <Home />,
//   },
//    {
//     path: "/projects",
//     element: <Projects />,
//   }
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
