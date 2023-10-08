import ReactDOM from 'react-dom/client'

import React from 'react'
import MainApp from './MainApp'
import { BrowserRouter } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate()




//  const router =createBrowserRouter([
 
//   {
//     path: "/",
//     element:<App/>,
//     children: [
//       {
//         path: "/home",
//         element: <Home/>,
//       },
//       {
//         path: "/about",
//         element: <About/>,
//       },
//       {
//         path: "/skill",
//         element: <Skill/>,
//         children:[{path:""}]
//       },
//       {
//         path: "/project",
//         element: <Project/>,
//       },
//       {
//         path: "/login",
//         element: <LoginPage/>,
//       },
//       {
//         path: "/singUp",
//         element: <SingUp/>,
//       },
//     ]
//   },
  
// ])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <MainApp/>
    </BrowserRouter>
    
      
      {/* <App /> */}
      {/* <RouterProvider router={router}/> */}
    
  </React.StrictMode>
)
