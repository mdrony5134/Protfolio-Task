import App from './App.jsx'
import {BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skill from './pages/Skill.jsx'
import Project from './pages/Project.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SingUp from './pages/SingUp.jsx'
import AuthLayout from './components/AuthLayout.jsx';

const MainApp = () => {
// const isLoggedIn = localStorage.getItem("LoggedIn")
// const navigate =  useNavigate()

  return (
    <BrowserRouter>
         <Routes>
          <Route  element={<AuthLayout/>}>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/singUp' element={<SingUp/>}/>
          </Route>
          <Route element={<App/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/skill' element={<Skill/>}/>
              <Route path='/project' element={<Project/>}/>
         </Route>
         
      </Routes>
      </BrowserRouter>
    
  )
}

export default MainApp