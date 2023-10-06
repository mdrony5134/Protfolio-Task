import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skill from './pages/Skill.jsx'
import Project from './pages/Project.jsx'


 const router =createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/skill",
        element: <Skill/>,
      },
      {
        path: "/project",
        element: <Project/>,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      {/* <App /> */}
      <RouterProvider router={router}/>
    
  </React.StrictMode>
)
